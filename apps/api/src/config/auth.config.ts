import { registerAs } from '@nestjs/config';

type AuthConfig = {
  accessToken: {
    secret: string;
    expirationTime: string;
  };
  refreshToken: {
    secret: string;
    expirationTime: string;
  };
  oauth: {
    google: {
      id: string;
      secret: string;
      redirectUrl: string;
    };
  };
};

export default registerAs(
  'auth',
  (): Required<AuthConfig> => ({
    accessToken: {
      secret: process.env.ACCESS_TOKEN_SECRET_KEY,
      expirationTime: '15m',
    },
    refreshToken: {
      secret: process.env.REFRESH_TOKEN_SECRET_KEY,
      expirationTime: '7d',
    },
    oauth: {
      google: {
        id: process.env.OAUTH_GOOGLE_ID,
        secret: process.env.OAUTH_GOOGLE_SECRET,
        redirectUrl: process.env.OAUTH_GOOGLE_REDIRECT_URL,
      },
    },
  }),
);
