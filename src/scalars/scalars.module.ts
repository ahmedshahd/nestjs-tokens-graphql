import { Module } from '@nestjs/common';
import { GraphQLScalarType, Kind } from 'graphql';

const DateTimeScalar = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime custom scalar type',
  parseValue: (value: any) => new Date(value),
  serialize: (value: any) => value.getTime(),
  parseLiteral: (ast: any) =>
    ast.kind === Kind.INT ? new Date(parseInt(ast.value, 10)) : null,
});
const VoidScalar = new GraphQLScalarType({
  name: 'Void',
  description: 'Void custom scalar type',
  serialize: () => null,
  parseValue: () => null,
  parseLiteral: () => null,
});

@Module({
  providers: [
    {
      provide: 'ScalarType',
      useValue: DateTimeScalar,
    },
    {
      provide: 'ScalarType',
      useValue: VoidScalar,
    },
  ],
  exports: ['ScalarType'],
})
export class ScalarsModule {}
