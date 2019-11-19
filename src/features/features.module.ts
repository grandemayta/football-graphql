import { Module } from '@nestjs/common';
import { TeamsResolver } from './teams/teams.resolver';
import { ServicesModule } from '../services/services.module';
import { StandingsResolver } from './standings/standings.resolver';

@Module({
    imports: [ServicesModule],
    providers: [TeamsResolver, StandingsResolver],
})
export class FeaturesModule {}
