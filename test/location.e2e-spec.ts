import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { LocationModule } from '../src/location/location.module';
import { LocationService } from '../src/location/location.service';

describe('Locatio  Controller (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LocationModule],
      providers: [LocationService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/locations')
      .expect(200)
      .expect(['chile', 'colombia', 'peru']);
  });
});
