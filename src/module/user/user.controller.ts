import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { UserService } from '../user/user.service'

import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger'

@Controller('register')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBearerAuth('jwt-token')
  @ApiOperation({ description: 'this endpoint is protected by jwt for you to use add the @PublicRouter decorator' })
  public create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.create(createUserDto)
  }
}
