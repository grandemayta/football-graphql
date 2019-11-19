import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class HttpWrapperService {
    private BASE_URL = 'https://api.football-data.org/v2';
    private TOKEN = 'ffd61d87e73740c29dd389ea7619d5e1';
    private HEADERS = { 'X-Auth-Token': this.TOKEN };

    private common(endpoint: string) {
        return fetch(`${this.BASE_URL}/${endpoint}`, { headers: this.HEADERS });
    }

    async getTeams(competition: string) {
        const response = await this.common(`competitions/${competition}/teams`);
        const json = await response.json();
        return json.teams;
    }

    async getTeam(teamId: string) {
        const response = await this.common(`teams/${teamId}`);
        return response.json();
    }

    async getStandings(competition: string) {
        const response = await this.common(`competitions/${competition}/standings`);
        const json = await response.json();
        return json.standings[0].table;
    }
}
