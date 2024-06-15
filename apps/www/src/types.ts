export type User = {
  uuid: string;
  email: string;
  name: string;
  strategy: "LOCAL" | "GOOGLE" | "FACEBOOK";
};
