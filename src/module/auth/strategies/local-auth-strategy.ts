import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from '../auth.service'
import { UsersDTO } from 'src/repositories/users/dto/UsersDTO'
import { Injectable } from '@nestjs/common'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  public constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' })
  }

  public async validate(email: string, password: string): Promise<UsersDTO> {
    return await this.authService.validateUser(email, password)
  }
}
