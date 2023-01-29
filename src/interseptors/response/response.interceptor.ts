import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';

export interface Response<T> {
    status: 'success' | 'fail';
    data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => ({ data, status: 'succes' })),
            // без учета 4 задания - раскомментировать
            // catchError((err) => of({ data: err, status: 'fail' })),
        );
    }
}
