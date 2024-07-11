import type { AWS } from "@serverless/typescript";
import { createClients, findClients } from "@modules/clients";

const serverlessConfiguration: AWS = {
  service: "api-galgjur-v1",
  frameworkVersion: "3",
  plugins: [
    // "serverless-auto-swagger",
    "serverless-dotenv-plugin",
    "serverless-webpack",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    deploymentBucket: {
      name: `api-galgjur-v1-bucket`,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: ["*"],
            Resource: ["*"],
          },
        ],
      },
    },
  },
  functions: { createClients, findClients },
  package: { individually: true },
  custom: {
    dotenv: {
      path: "./.env.development",
    },
    webpack: {
      webpackConfig: "./webpack.config.ts",
      includeModules: true,
      useChildProcesses: true,
      packager: "yarn",
      excludeFiles: "src/**/*.spec.*",
    },
    layers: {
      dependenciesPath: "./package.json",
    },
    // autoswagger: {
    //   title: "icaro",
    //   generateSwaggerOnDeploy: true,
    //   // schemes: ["https"],
    //   // apiKeyHeaders: ["Authorization"],
    //   // useStage: true,
    //   host: "https://icaroalbar.com.br/",
    //   basePath: "/aaa",
    //   typefiles: ["./src/functions/clients/createClients/index.ts"]
    // },
  },
};

module.exports = serverlessConfiguration;
