import { Injectable } from '@nestjs/common';


 export interface User{
    id: number;
    name: string;
    email: string;
 }


 @Injectable()
 export class UserService {
     private users: User[] = []; // Sử dụng kiểu User
 
     createUser(name: string, email: string): User {
         const newUser: User = { id: Date.now(), name, email };
         this.users.push(newUser);
         return newUser;
     }
     
    getAllUsers():User[]{
        return this.users;
    }
}
