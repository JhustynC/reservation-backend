import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appDataSource } from './config/database.providers';
import { User } from './entity/user.entiry';

const port: number = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? port);
  console.log(`UP ON: http://localhost:${port}`);
  appDataSource.getRepository(User);
}

bootstrap().catch((err) => console.error(err));
