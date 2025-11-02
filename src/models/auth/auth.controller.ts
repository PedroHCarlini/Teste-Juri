import { Body, Controller, Post } from '@nestjs/common';
import { AuthUseCase } from './usecase/auth.usecase';

@Controller('auth')
export class AuthController {
  constructor(private readonly authUsecase: AuthUseCase) {}

  @Post()
  authenticate() {
    return this.authUsecase.authenticate();
  }
}
