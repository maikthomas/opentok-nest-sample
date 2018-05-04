import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { OpentokService } from './opentok.service';
import * as OpenTok from 'opentok';

@Controller('opentok')
export class OpentokController {
  constructor(private readonly OpentokService: OpentokService) {}

  @Get('/session')
  async createSession(): Promise<any> {
    const session: OpenTok.Session = await this.OpentokService.createSession();
    return {
      sessionId: session.sessionId,
    };
  }

  @Get('/session/:id/token')
    generateToken(@Param('id') id) {
      return {
        token: this.OpentokService.generateToken(id),
      }
    }
}
