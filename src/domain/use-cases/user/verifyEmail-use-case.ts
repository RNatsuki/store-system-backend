import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/user-repository";



export class VerifyEmailUseCase {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(email: string, token: string): Promise<User | null> {
        return await this.userRepository.verifyEmail(email, token);
    }

}
