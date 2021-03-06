---
id: readme
title: Readme
sidebar_label: Readme
---
# Hawaii.js 
Koa2 and Next.js full-stack, serverless-ready, monorepo boilerplate

## Features
* Develop, test and debug locally as a server
* Deploy to AWS Lambda for production
* with AWS DynamoDB, that runs locally in a container
* "Magic link" authentication strategy
* Web client, integrated with services and implemented authentication
* Service-to-service token-based authentication
* Authorization and role management for services and client
* RESTful API built with json-api schema
* Request/response validations
* One place to manage env variables, with secrets management
* HTTP-friendly error responses
* Shared test helpers and unified mocks and fixtures strategy
* Friendly CLI
* Documentation
* Monorepo
* Code linting and prettifying

## Built with
### Functions
* [Koa2](https://github.com/koajs/koa) and [koa-joi-router](https://github.com/koajs/joi-router)
* [Serverless](https://serverless.com/) and [serverless-offline](https://github.com/dherault/serverless-offline)
* [DynamoDB](https://aws.amazon.com/dynamodb/) and [Dynamoose](https://dynamoosejs.com/)
* [Got](https://github.com/sindresorhus/got)
* [Nodemailer](https://nodemailer.com)
* [koa-req-id](https://github.com/rkrayovskyy/koa-req-id)
* [Boom](https://github.com/hapijs/boom)
* [koa-pino-logger](https://github.com/pinojs/koa-pino-logger)

### Web client
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/), [Redux](https://react-redux.js.org/) and React Hooks
* [Final Form](https://github.com/final-form/final-form)
* [Mappersmith](https://github.com/tulios/mappersmith)

### Testing
* [Jest](https://jestjs.io/en/)
* [@shopify/jest-koa-mocks](https://github.com/Shopify/quilt/tree/master/packages/jest-koa-mocks)
* [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
* Custom collection of test helpers and mocks (`libs/test-helpers`)

### Documentation
* [Docusaurus](https://docusaurus.io/)
* CLI tools to build documentation from individual functions and libs

## Getting started
See [How To/Setup](how-to/setup) section

## Opinions and choices
Even though this boilerplate is heavily opinioated, it preserves quite a lot of flexibililty in further extension and choosing other frameworks and tools, i.e. Express can be a no-to-low-cost drop-in replacement for Koa, either for existing functions, or to spin up new ones. Same extends to other choices made here, i.e. req/res validation with Joi, or response serialization according to json-api standard.

The core idea, which will be maintained and developed further is to support serverless strategy for both services, clients and DB, with good development experience and local development.

## Why Hawaii.js?
[Koa](https://en.wikipedia.org/wiki/Acacia_koa) is a tree growing exclusively in the Hawaiian Islands. Koa2 has been chosen as the primary web framework for the services/functions, hence the name is to celebrate this fact.

## Roadmap
See `backlog.todo` files for global and individual packages roadmap.

## Development
`yarn test` globally or in individual packages.

## Author
Roman Krayovskyy rkrayovskyy@gmail.com

## License
MIT
