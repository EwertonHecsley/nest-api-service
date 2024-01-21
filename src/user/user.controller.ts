import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service'
import { Response } from 'express';
import { IUser } from './dtos/User.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { };

    @Post()
    async create(@Body() body: IUser, @Res() res: Response) {
        const { name, email, password } = body;

        const verifyEmail = await this.userService.getUserByEmail(email);
        if (verifyEmail) return res.status(HttpStatus.BAD_REQUEST).json({ mensagem: 'Email já cadastrado no sistema.' });

        const user = await this.userService.create({ name, email, password });
        return res.status(HttpStatus.CREATED).json({ mensagem: 'Usuário cadastrado com sucesso.', usuario: user });
    };
}
