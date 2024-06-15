import { z } from "zod";

export const signupValidation = z.object({
  email: z.string().email(),
  password: z.string(),
});
