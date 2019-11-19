import { Test, TestingModule } from '@nestjs/testing';
import { StandingsResolver } from './standings.resolver';

describe('StandingsResolver', () => {
  let resolver: StandingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StandingsResolver],
    }).compile();

    resolver = module.get<StandingsResolver>(StandingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
