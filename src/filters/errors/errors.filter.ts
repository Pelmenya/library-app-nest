import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class ErrorsFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus() || 500;
        const err = exception.message;

        response.status(status).json({
            timestamp: new Date().toISOString(),
            code: status,
            data: err,
            status: 'fail',
        });
    }
}
