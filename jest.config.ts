import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./jest-preload-env.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@infra/libs/(.*)$": "<rootDir>/src/libs/$1",
    "^@modules/(.*)$": "<rootDir>/src/modules/$1",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/mocks/",
  ],
};

export default config;
