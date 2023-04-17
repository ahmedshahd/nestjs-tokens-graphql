import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from 'src/auth/types';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const gqlCtx = GqlExecutionContext.create(context);
    const ctx = gqlCtx.getContext();
    console.log('ctx for logout', ctx);
    const user = ctx.req.user as JwtPayload;
    return user.sub;
  },
);
