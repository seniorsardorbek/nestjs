import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import * as bcrjs from 'bcryptjs';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
  @Post('/register')
  async register(@Body() body: any) {
    body.password = await bcrjs.hash(body.password, 10); // hashing password before storing it in the database
    return this.authService.register(body);
  }
}
