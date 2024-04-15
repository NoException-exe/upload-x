export type UserPayload = {
  id: string
  name: string
  iat?: number
  exp?: number
}

export type UserPayloadJwt = Omit<UserPayload, 'iat' | 'exp'>
