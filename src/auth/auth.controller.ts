import { Controller, 
  Post, 
  Get,
  Body, 
  HttpCode, 
  HttpStatus, 
  Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './dto/loginRequestBody.dto';
import { Public } from '../auth/decorators/isPublic.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginRequestBody : LoginRequestBody) {
    return this.authService.login(loginRequestBody);
  }

  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }

}
