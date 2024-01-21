import { Injectable } from '@nestjs/common';
import knex from '../database/connection';
import { IUser } from './dtos/User.dto';

@Injectable()
export class UserService {
    async create(user: IUser): Promise<IUser[]> {
        return await knex('user').insert(user).returning('*');
    };

    async getAll(): Promise<IUser[]> {
        return await knex('user');
    };

    async getUserById(id: number): Promise<IUser> {
        return await knex('user').where({ id }).first();
    };

    async getUserByEmail(email: string): Promise<IUser> {
        return await knex('user').where({ email }).first();
    };
};
