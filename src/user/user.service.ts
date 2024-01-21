import { Injectable } from '@nestjs/common';
import knex from '../database/connection';
import { IUser } from './dtos/User.dto';

@Injectable()
export class UserService {
    async create(user: IUser): Promise<IUser[]> {
        return await knex('users').insert(user).returning('*');
    };

    async getAll(): Promise<IUser[]> {
        return await knex('users');
    };

    async getUserById(id: number): Promise<IUser> {
        return await knex('users').where({ id }).first();
    };

    async getUserByEmail(email: string): Promise<IUser> {
        return await knex('users').where({ email }).first();
    };
};
