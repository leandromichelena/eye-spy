import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"],
    environmentMatchGlobs: [["src/__tests__/**/*.e2e.test.{js,jsx}", "node"]],
    include: ["src/**/*.test.{js,jsx}", "src/**/*.spec.{js,jsx}"],
    testTimeout: 120_000,
    hookTimeout: 120_000,
  },
});
