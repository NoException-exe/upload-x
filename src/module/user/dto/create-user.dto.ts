import { User } from '../entities/user.entity'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto extends User {
  @IsString()
  @MinLength(4)
  public name: string

  @IsEmail()
  public email: string

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  public password: string
}
