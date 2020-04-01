import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { IttClientModule } from './itt-client/itt-client.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    PrismaModule,
    IttClientModule,
    AuthModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
