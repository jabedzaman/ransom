const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

export const API_URL = `${apiUrl.endsWith("/") ? apiUrl : `${apiUrl}/`}api/v1`;
