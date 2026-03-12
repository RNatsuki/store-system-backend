import { prisma } from "../../../config/prisma";
import { Employee } from "../../../domain/entities/employee";
import { EmployeeRepository } from "../../../domain/repositories/employee.repository";

export class PrismaEmployeeRepository implements EmployeeRepository {
    findAll(): Promise<Employee[]> {
        throw new Error("Method not implemented.");
    }

    findByEmail(email: string): Promise<Employee | null> {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Promise<Employee | null> {
        throw new Error("Method not implemented.");
    }
    
    async save(employee: Employee): Promise<void> {
        await prisma.$transaction(async (tx: any) => {
            const user = await tx.user.create({
                data: {
                    email: employee.getEmail(),
                    password: employee.getPassword(),
                    token: employee.getToken(),
                    tokenExpires: employee.getTokenExpiration(),
                },
            });
            await tx.employee.create({
                data: {
                    name: employee.getName(),
                    lastname: employee.getLastName(),
                    birthdate: new Date(employee.getBirthDate()),
                    nss: employee.getNss(),
                    rfc: employee.getRfc(),
                    address: employee.getAddress(),
                    salary: employee.getSalary(),
                    profileImage: employee.getProfileImage(),
                    userId: user.id,
                },
            });
        });
    }
    update(employee: Employee): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    private mapToEntity(data: any): Employee {
        return new Employee(
            data.id,
            data.email,
            data.password,
            data.token,
            data.tokenExpires,
            data.name,
            data.lastname,
            data.birthdate,
            data.nss,
            data.rfc,
            data.address,
            data.salary,
            data.profileImage
        );
    }
}
