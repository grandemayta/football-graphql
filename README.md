# Football GraphQL
[![NPM version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=gh&type=6&v=0.0.1)](http://badge.fury.io/js/badge-list)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![made-with-javascript-doc](https://img.shields.io/badge/Made%20with-Javascript-1f425f.svg)](https://www.sphinx-doc.org/)

Features available:
- Get Teams
```graphql
{
  getTeams(competition: "SA") {
    id,
    name,
    shortName
  }
}
```
- Get Team
```graphql
{
  getTeam(teamId: "98") {
    id,
    name,
    shortName
    squad {
      id,
      name
    }
  }
}
```
- Get Standings
```graphql
{
  getStandings(competition: "SA") {
    team {
      id,
      name
    },
    points
  }
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Created with Nest

This application was created with [Nest](https://github.com/nestjs/nest).
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

Keep calm and code!
<br>
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
