import { Controller, Get, Res } from '@nestjs/common';
import { UserService } from './user.service'
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { };

    @Get()
    getAll(@Res() res: Response) {
        return res.json(this.userService.getHello())
    }
}