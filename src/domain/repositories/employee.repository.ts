import { Employee } from "../entities/employee";

export interface EmployeeRepository {
    findAll(): Promise<Employee[]>;
    findByEmail(email: string): Promise<Employee | null>;
    findById(id: string): Promise<Employee | null>;
    save(employee: Omit<Employee, 'id'>): Promise<void>;
    update(employee: Employee): Promise<void>;
    delete(id: string): Promise<void>;
}
