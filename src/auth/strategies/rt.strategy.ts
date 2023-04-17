// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { Request } from 'express';
// import { JwtPayloadWithRt } from '../types';
// Injectable();
// export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 'rt-secret',
//       passReqToCallback: true,
//     });
//   }
//   validate(req: Request, payload: JwtPayloadWithRt) {
//     const refreshToken = req.get('authorization').replace('Bearer', '').trim();
//     return { ...payload, refreshToken };
//   }
// }

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { JwtPayloadWithRt } from '../types';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'rt-secret',
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: JwtPayloadWithRt) {
    const refreshToken = req.get('authorization').replace('Bearer', '').trim();
    // console.log('refreshToken from strategy', refreshToken);
    // console.log('payload from strategy', { ...payload, refreshToken });
    return { ...payload, refreshToken };
  }
}
