import { Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('Void')
export class Void {
  description = 'Void custom scalar type';

  parseValue(value: any) {
    return null;
  }

  serialize(value: any) {
    return null;
  }

  parseLiteral(ast: any) {
    if (ast.kind === Kind.NULL) {
      return null;
    }
    return undefined;
  }
}
