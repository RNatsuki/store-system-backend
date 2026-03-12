import { EmployeeRepository } from "../../repositories/employee.repository";



export class GetEmployeeUseCase {
    private employeeRepository: EmployeeRepository;

    constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public async execute() {
        return await this.employeeRepository.findAll();
    }
}
