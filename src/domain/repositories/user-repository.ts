import { User } from "../entities/user";


export interface UserRepository {
    //findAll(): Promise<User[]>;
    verifyEmail(email: string, token: string): Promise<User| null>;
    findByEmail(email: string): Promise<User | null>;
    //save(user: User): Promise<void>;
    update(user: User): Promise<void>;
}
