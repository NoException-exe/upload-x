import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { UserService } from '../user/user.service'

@Controller('register')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.create(createUserDto)
  }
}
