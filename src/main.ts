import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorsFilter } from './filters/errors/errors.filter';
import { ResponseInterceptor } from './interseptors/response/response.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.enableCors();
    app.useGlobalInterceptors(new ResponseInterceptor());
    app.useGlobalFilters(new ErrorsFilter());
    await app.listen(3000);
}
bootstrap();
