import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class ErrorsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
