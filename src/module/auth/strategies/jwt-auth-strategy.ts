import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { Injectable } from '@nestjs/common'
import { UserPayload, UserPayloadJwt } from '../types/user-payload'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  public async validate(payload: UserPayload): Promise<UserPayloadJwt> {
    return {
      id: payload.id,
      name: payload.name,
    }
  }
}
