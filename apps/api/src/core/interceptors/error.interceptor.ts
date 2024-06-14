import { logger } from '@/main';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor() {}

  async catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : 'translation.internalServerError';

    if (statusCode === HttpStatus.INTERNAL_SERVER_ERROR) {
      logger.error(exception);
    }

    const errorResponse = {
      statusCode,
      message,
      timestamp: new Date().toISOString(),
    };

    response.status(statusCode).json(errorResponse);
  }
}
