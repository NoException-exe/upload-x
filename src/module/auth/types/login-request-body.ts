import { IsEmail, IsString } from 'class-validator'

export class LoginRequestBody {
  @IsEmail()
  public email: string

  @IsString()
  public password: string
}
