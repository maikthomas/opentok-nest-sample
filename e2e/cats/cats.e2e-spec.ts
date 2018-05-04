import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { OpentokModule } from '../../src/cats/opentok.module';
import { OpentokService } from '../../src/cats/opentok.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let server;
  let app: INestApplication;

  const OpentokService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [OpentokModule],
    })
      .overrideComponent(OpentokService)
      .useValue(OpentokService)
      .compile();

    server = express();
    app = module.createNestApplication(server);
    await app.init();
  });

  it(`/GET cats`, () => {
    return request(server)
      .get('/cats')
      .expect(200)
      .expect({
        data: OpentokService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
