import { ApiProperty } from '@nestjs/swagger'
import { User } from '../entities/user.entity'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto extends User {
  @ApiProperty({
    example: 'exception',
  })
  @IsString()
  @MinLength(4)
  public name: string

  @ApiProperty({
    example: 'exception@gmail.com',
  })
  @IsEmail()
  public email: string

  @ApiProperty({
    example: 'exception123456',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  public password: string
}
