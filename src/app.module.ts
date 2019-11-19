import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
    }),
    FeaturesModule,
  ],
})
export class AppModule {}
