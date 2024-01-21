import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service'
import { Response } from 'express';
import { IUser } from './dtos/User.dto';
import { HashPasswordService } from './services/HashPassword.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly userHashPasswordService: HashPasswordService
    ) { };

    @Post()
    async create(@Body() body: IUser, @Res() res: Response) {
        const { name, email, password } = body;

        const verifyEmail = await this.userService.getUserByEmail(email);
        if (verifyEmail) throw new HttpException('Email já cadastrado no sistema.', HttpStatus.BAD_REQUEST);

        const hashPassword = await this.userHashPasswordService.hashPassword(password);

        const user = await this.userService.create({ name, email, password: hashPassword });
        return res.status(HttpStatus.CREATED).json({ mensagem: 'Usuário cadastrado com sucesso.', usuario: user });
    };
}
