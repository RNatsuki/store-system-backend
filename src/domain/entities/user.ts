export class User {
    private id: string;
    private email: string;
    private password: string;
    private token: string;
    private tokenExpiration: Date;
    private role: string;
    private isActive: boolean;
    private isVerified: boolean;

    constructor(
        id: string,
        email: string,
        password: string,
        token: string,
        tokenExpiration: Date,
        role: string,
        isActive: boolean,
        isVerified: boolean
    ) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.token = token;
        this.tokenExpiration = tokenExpiration;
        this.isActive = isActive;
        this.role = role;

        this.isVerified = isVerified;
    }

    public getId(): string {
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

    public getRole(): string {
        return this.role;
    }

    public getIsActive(): boolean {
        return this.isActive;
    }

}
