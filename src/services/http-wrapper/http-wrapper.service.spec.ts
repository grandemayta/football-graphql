import { Test, TestingModule } from '@nestjs/testing';
import { HttpWrapperService } from './http-wrapper.service';

describe('HttpWrapperService', () => {
  let service: HttpWrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpWrapperService],
    }).compile();

    service = module.get<HttpWrapperService>(HttpWrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
