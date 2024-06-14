type AppConfig = {
  app: {
    name: string;
    tagline: string;
    description: string;
  };
  contact: {
    mail: string;
  };
  authors: Array<{
    name: string;
    mail: string;
    link: string;
  }>;
};

export const appConfig: AppConfig = {
  app: {
    name: "ransom",
    tagline: "A modern web application boilerplate",
    description: "A modern web application boilerplate",
  },
  contact: {
    mail: "hi@jabed.dev",
  },
  authors: [
    {
      name: "Jabed Zaman",
      mail: "hi@jabed.dev",
      link: "https://jabed.dev",
    },
  ],
};
