import { logger } from '@/main';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      const responseTime = Date.now() - startTime;
      logger.log(
        `${method} ${originalUrl} ${statusCode} ${
          contentLength || 0
        } - ${responseTime}ms`,
      );
    });

    next();
  }
}
