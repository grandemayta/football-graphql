import { Module } from '@nestjs/common';
import { HttpWrapperService } from './http-wrapper/http-wrapper.service';

@Module({
  providers: [HttpWrapperService],
  exports: [HttpWrapperService],
})
export class ServicesModule {}
