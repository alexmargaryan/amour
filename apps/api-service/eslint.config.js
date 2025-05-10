import { config as baseConfig } from "@amour/eslint-config/service";

export default [
  ...baseConfig,
  {
    rules: {
      // Add stricter or looser rules for this app
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
