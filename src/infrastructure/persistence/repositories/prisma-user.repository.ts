import { prisma } from "../../../config/prisma";

import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../../domain/repositories/user-repository";

export class PrismaUserRepository implements UserRepository {
    async verifyEmail(email: string, token: string): Promise<User | null> {
        await prisma.$transaction(async (tx: any) => {
            const user = await tx.user.findUnique({
                where: { email },
            });

            if (user && user.token === token) {
                await tx.user.update({
                    where: { email },
                    data: { isVerified: true },
                });
            }

            if (!user || user.token !== token) {
                return null;
            }
        });

        return await this.findByEmail(email);
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        return user ? this.mapToEntity(user) : null;
    }

    update(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

    private mapToEntity(data: any): User {
        return new User(
            data.id,
            data.email,
            data.password,
            data.token,
            data.tokenExpires,
            data.isVerified
        );
    }
}
