import { registerAs } from '@nestjs/config';

type AppConfig = {
  name: string;
  env: string;
  frontendUrl: string;
  versioning: {
    enable: boolean;
    prefix: string;
    version: string;
  };
  globalPrefix: string;
  http: {
    enable: boolean;
    host: string;
    port: number;
  };
};

export default registerAs(
  'app',
  (): Required<AppConfig> => ({
    name: process.env.APP_NAME ?? '@ransom/api',
    env: process.env.APP_ENV ?? 'development',
    frontendUrl: process.env.APP_FRONTEND_URL ?? 'http://localhost:3000',
    versioning: {
      enable: process.env.HTTP_VERSIONING_ENABLE === 'true' ?? false,
      prefix: 'v',
      version: process.env.HTTP_VERSION ?? '1',
    },
    globalPrefix: '/api',
    http: {
      enable: process.env.HTTP_ENABLE === 'true' ?? false,
      host: process.env.HTTP_HOST ?? '0.0.0.0',
      port: process.env.HTTP_PORT
        ? Number.parseInt(process.env.HTTP_PORT)
        : 5000,
    },
  }),
);
