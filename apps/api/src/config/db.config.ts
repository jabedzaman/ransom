import { registerAs } from '@nestjs/config';

type DbConfig = {
  url: string;
};

export default registerAs(
  'db',
  (): Required<DbConfig> => ({
    url: process.env.DATABASE_URL,
  }),
);
