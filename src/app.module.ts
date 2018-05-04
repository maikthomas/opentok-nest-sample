import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { OpentokModule } from './opentok/opentok.module';
import { OpentokController } from './opentok/opentok.controller';

@Module({
  imports: [OpentokModule],
})
export class ApplicationModule {}
