import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { AtStrategy, RtStrategy } from './strategies';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    JwtModule.register({
      // global: true,
      // secret: jwtConstants.secret,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  // controllers: [AuthController],
  providers: [AuthResolver, AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}
