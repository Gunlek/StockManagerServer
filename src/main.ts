import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize';

require('dotenv').config();

export const localSequelize = new Sequelize({
  dialect: "mariadb",
  host: process.env.MARIADB_HOST,
  database: process.env.MARIADB_DATABASE,
  username: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.APP_PORT);
}
bootstrap();
