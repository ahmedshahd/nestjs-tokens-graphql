import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  RefreshTokenResponse,
  SigninResponse,
  SigninUserInput,
  SignupResponse,
  SignupUserInput,
} from 'src/graphql';
import { Void } from 'src/scalars';
import { GetCurrentUser, GetCurrentUserId, Public } from './common/decorators';
import { HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RtGuard } from './common/guards';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Mutation(() => SignupResponse)
  async signup(@Args('input') input: SignupUserInput): Promise<SignupResponse> {
    console.log('input', input);
    return this.authService.signupLocal(input);
  }

  @Public()
  @Mutation(() => SigninResponse)
  async signin(@Args('input') input: SigninUserInput): Promise<SigninResponse> {
    return this.authService.signinLocal(input);
  }

  @Public()
  @UseGuards(RtGuard)
  @Mutation(() => RefreshTokenResponse)
  async refreshToken(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<RefreshTokenResponse> {
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @Mutation(() => Void)
  async logout(@GetCurrentUserId() userId: number) {
    console.log('userId', userId);
    return this.authService.logout(userId);

    // implementation logic for logout mutation
  }
}
