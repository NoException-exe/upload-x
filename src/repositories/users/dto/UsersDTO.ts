import { ApiProperty } from '@nestjs/swagger'

export class UsersDTO {
  public name: string

  @ApiProperty({
    example: 'exception@gmail.com',
  })
  public email: string

  @ApiProperty({
    example: 'exception123456',
  })
  public password: string
}
