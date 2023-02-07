import { User } from '@prisma/client';

type UserData = User;

export class GetUserToUpdate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  constructor(user: UserData) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
  }
}
