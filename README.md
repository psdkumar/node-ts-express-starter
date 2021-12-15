# node-ts-express-starter

## Introduction

This is a starter project for developing applications in node, typescript and express. nodemon is used for monitoring any code changes and automatically restart the server during local testing.

## Prerequisities

1. Node v14 - Install latest stable node v14 version from [here](https://nodejs.org/en/download/). Use [nvm](https://github.com/nvm-sh/nvm) for easy and better management of node versions.

2. yarn - Install it from [here](https://classic.yarnpkg.com/en/docs/install)

3. (optional) Overmind - Install it from [here](https://github.com/DarthSim/overmind#installation).

## Getting Started

1. Either clone or fork the repository.

2. Make sure you have all the prerequisities installed in your machine.

3. Run `yarn install` to download all the libraries.

4. If you had installed `overmind`, run the following command to start the server and test your API.

   ```bash
   overmind start
   ```

5. If you didnot install `overmind`, run the following commands in 2 different terminals parallely.

   ```bash
   yarn watch # This will continuously compile all changes and will be available instantly in the server
   yarn dev # This will start the local server through which you can test your changes
   ```
