import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUseCase {
  constructor(private readonly jwtService: JwtService) {}

  async authenticate(): Promise<any> {
    return {
      accessToken: this.jwtService.sign({
        sub: 'system_user_id',
        username: 'admin',
        role: 'system',
      }),
    };
  }
}
