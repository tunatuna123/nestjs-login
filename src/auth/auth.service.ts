import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(email: string, password: string) {
    if (email === 'test@test.com' && password === 'test') {
      const payload = { email: email, sub: '0' };
      return this.jwtService.sign(payload);
    } else {
      throw new UnauthorizedException('None Authorized User');
    }
  }
}
