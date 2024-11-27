import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

/*
Creates a new NestJS application and sets up the Swagger module to generate the OpenAPI documentation.
https://docs.nestjs.com/openapi/introduction
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Ejemplo de API con NestJS')
    .setDescription('La API de ejemplo con NestJS')
    .setVersion('1.0')
    .addTag('ejemplo')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();