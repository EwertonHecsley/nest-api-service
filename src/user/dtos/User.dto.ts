import { IsEmail, IsNotEmpty, IsString, MinLength, isEmail } from "class-validator"

export class IUser {
    id?: number

    @IsString()
    @IsNotEmpty({ message: 'Campo name não pode ser vazio.' })
    name: string

    @IsString()
    @IsNotEmpty({ message: 'Campo email não pode ser vazio.' })
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty({ message: 'Campo password não pode ser vazio.' })
    @MinLength(4)
    password: string
};