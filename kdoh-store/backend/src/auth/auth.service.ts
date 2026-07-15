import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Check against admin credentials from env
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      const payload = { email, sub: 'admin-id', role: 'admin' };
      return {
        ...payload,
        password: undefined,
      };
    }

    // In production, check against database users
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId || 'admin-id', role: user.role || 'admin' };
    return {
      access_token: this.jwtService.sign(payload),
      user: { email: user.email, role: user.role },
    };
  }
}
