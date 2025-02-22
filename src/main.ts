import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port: number = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? port);
  console.log(`UP ON: http://localhost:${port}`);
}

bootstrap().catch((err) => console.error(err));
