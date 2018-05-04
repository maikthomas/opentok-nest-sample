import { Component } from '@nestjs/common';
import * as OpenTok from 'opentok';
import { OpentokModule } from './opentok.module';

@Component()
export class OpentokService {
  // TODO add config values
  private readonly opentok: OpenTok = new OpenTok('', '');

  createSession(): Promise<OpenTok.Session> {
    return new Promise((resolve, reject) => {
      this.opentok.createSession({mediaMode:"routed"}, (err, session) => {
        if (session) {
          resolve(session);
        } else {
          reject(err)
        }
      });
      });
    }

  generateToken(sessionId: string, options?: any): OpenTok.Token {
    return this.opentok.generateToken(sessionId, options);
  }
}
