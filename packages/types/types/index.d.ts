declare module "@ransom/types" {
  export type ITokenResponse = {
    accessToken: string;
    refreshToken: string;
  };

  export type IAuthPayload = {
    uuid: string;
  };
}
