import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function start() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useStaticAssets(path.join(__dirname, '..', 'uploads'), {
    prefix: '/api/v1/files/',
  });

  const config = new DocumentBuilder()
    .setTitle('Clothes Store')
    .setDescription('Docs REST API')
    .setVersion('1.0.0')
    .addTag('clothes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(PORT, () =>
    console.log(`
    ==========================================
            🚀 STARTED ON PORT ${PORT} 🚀
    ==========================================
    `),
  );
}

start();
