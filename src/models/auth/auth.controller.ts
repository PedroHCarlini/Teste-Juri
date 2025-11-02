import { Controller, Post } from '@nestjs/common';

import { AuthUseCase } from './usecase/auth.usecase';
import { Public } from './infra/decorators/auth-public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authUsecase: AuthUseCase) {}

  @Public()
  @Post()
  authenticate() {
    return this.authUsecase.authenticate();
  }
}
