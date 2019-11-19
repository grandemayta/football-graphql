import { Resolver, Query, Args } from '@nestjs/graphql';
import { HttpWrapperService } from '../../services/http-wrapper/http-wrapper.service';

@Resolver('Teams')
export class TeamsResolver {
    constructor(private httpWrapper: HttpWrapperService) { }

    @Query('getTeams')
    async getTeams(@Args('competition') competition: string) {
        return await this.httpWrapper.getTeams(competition);
    }

    @Query('getTeam')
    async getTeam(@Args('teamId') teamId: string) {
        return await this.httpWrapper.getTeam(teamId);
    }
}
