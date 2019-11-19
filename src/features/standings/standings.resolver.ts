import { Resolver, Query, Args } from '@nestjs/graphql';
import { HttpWrapperService } from '../../services/http-wrapper/http-wrapper.service';

@Resolver('Standings')
export class StandingsResolver {
    constructor(private httpWrapper: HttpWrapperService) { }

    @Query('getStandings')
    async getStandings(@Args('competition') competition: string) {
        return await this.httpWrapper.getStandings(competition);
    }
}
