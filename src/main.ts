import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorsFilter } from './filters/errors/errors.filter';
import { ResponseInterceptor } from './interseptors/response/response.interceptor';
import { ValidationPipe } from './pipes/validation/validation.pipe';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new ResponseInterceptor());
    app.useGlobalFilters(new ErrorsFilter());
    await app.listen(3000);
}
bootstrap();
