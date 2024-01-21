import * as  bcrypt from 'bcrypt';

export class HashPasswordService {
    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 8);
    };

    async compareHash(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }

}