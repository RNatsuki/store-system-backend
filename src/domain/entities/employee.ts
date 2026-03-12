import { User } from "./user";

export class Employee extends User {

    private name: string;
    private lastName: string;
    private birthDate: Date;
    private nss: string;
    private rfc: string;
    private address: string;
    private salary: number;
    private profileImage?: string;

    constructor(
        id: string | undefined,
        email: string,
        password: string | undefined,
        token: string | undefined,
        tokenExpiration: Date | undefined,
        name: string,
        lastName: string,
        birthDate: Date,
        nss: string,
        rfc: string,
        address: string,
        salary: number,
        profileImage?: string,
        isVerified: boolean = false
    ) {
        super(
            id,
            email,
            password!,
            token!,
            tokenExpiration!,
            isVerified
        );
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.nss = nss;
        this.rfc = rfc;
        this.address = address;
        this.salary = salary;
        this.profileImage = profileImage;
    }

    public getId(): string | undefined {
        return super.getId();
    }

    public getEmail(): string {
        return super.getEmail();
    }


    public getName(): string {
        return this.name;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public getNss(): string {
        return this.nss;
    }

    public getRfc(): string {
        return this.rfc;
    }

    public getAddress(): string {
        return this.address;
    }

    public getSalary(): number {
        return this.salary;
    }

    public getProfileImage(): string | undefined {
        return this.profileImage;
    }

}
