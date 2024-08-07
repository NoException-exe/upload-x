import { Request, Controller, HttpCode, HttpStatus, Post, UseGuards, Get } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guards/local-auth-guard'
import { AuthRequest } from './types/auth-request'
import { UserToken } from './types/user-token'
import { PublicRouter } from './decorators/is-public-decorator'
import { CurrentUser } from './decorators/current-user.decorator'
import { User } from '../user/entities/user.entity'
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger'
import { UsersDTO } from 'src/repositories/users/dto/UsersDTO'

@Controller()
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @PublicRouter()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: UsersDTO })
  public login(@Request() request: AuthRequest): UserToken {
    return this.authService.login(request.user)
  }

  @ApiBearerAuth('jwt-token')
  @Get('/me')
  public getMe(@CurrentUser() currentUser: User): User {
    return currentUser
  }
}
