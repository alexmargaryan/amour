import { z } from "zod";

export enum Environment {
  Development = "development",
  Test = "test",
  Production = "production",
}

const environmentValidationSchema = z.object({
  PORT: z.coerce.number().default(5000),
  API_URL: z.string().url().default("http://localhost:5000"),
  WEB_CLIENT_URL: z.string().url().default("http://localhost:5173"),
  NODE_ENV: z
    .enum([Environment.Development, Environment.Test, Environment.Production])
    .default(Environment.Development),
});

export const config = (config: Record<string, unknown>) => {
  const result = environmentValidationSchema.parse(config);
  return result;
};
