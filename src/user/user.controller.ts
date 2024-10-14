import { Controller, Body, Post ,Get } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}


    @Post('register')
    createUser(
        @Body('name') name: string,
        @Body('email') email: string,
    ):User {
        return this.userService.createUser(name,email);
    }


    @Get('get-users')
    getAllUsers():User[] {
        return this.userService.getAllUsers();
    }
}
