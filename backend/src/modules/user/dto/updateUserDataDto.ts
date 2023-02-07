import { IsEmail, IsString, MinLength, Validate } from 'class-validator';
import { PasswordValidator } from '../../../validators/password-validator';

export class UpdateUserDataDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  @MinLength(8)
  @Validate(PasswordValidator)
  password: string;
  @IsString()
  @IsEmail()
  email: string;
}
