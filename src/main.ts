import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';

const httpsOptions = {
  key: readFileSync('/home/ubuntu/service/proxy/data/certbot/conf/live/armorer.nl/privkey.pem'),
  cert: readFileSync('/home/ubuntu/service/proxy/data/certbot/conf/live/armorer.nl/fullchain.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions
  });
  app.set('trust proxy', 1)
  await app.listen(8443);
}
bootstrap();

