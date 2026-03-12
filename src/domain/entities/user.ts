export class User {
    private id?: string;
    private email: string;
    private password: string;
    private token: string;
    private tokenExpiration: Date;
    private isVerified: boolean;

    constructor(
        id: string | undefined,
        email: string,
        password: string,
        token: string,
        tokenExpiration: Date,
        isVerified: boolean
    ) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.token = token;
        this.tokenExpiration = tokenExpiration;
        this.isVerified = isVerified;
    }

    public getId(): string | undefined {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getToken(): string {
        return this.token;
    }

    public getTokenExpiration(): Date {
        return this.tokenExpiration;
    }

    public getIsVerified(): boolean {
        return this.isVerified;
    }

}
