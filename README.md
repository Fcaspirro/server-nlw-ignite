# NLW eSports Server

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT) [![Actions Status](https://github.com/waldemarnt/node-typescript-api/workflows/Complete%20workflow/badge.svg)](https://github.com/YuriWitney/nlw-esports-server/actions)

artifact of the bootcamp of NLW eSports promoted by [rocketseat](https://github.com/Rocketseat), trail ignite, taught by [Diego Fernandes](https://github.com/diego3g)

# Summary

- [NLW](#NLW)
- [Installation](#Installation)
- [Routes](#Routes)
- [Tools and lessons viewed](#Tools-and-lessons-viewed)
- [Techs](#Techs)
- [References](#References)

# eSports Server

eSports server is an ad lead API for games. You'll be able to register ads in a game to find your game duo using a Discord account.

# Installation

To install this project, run the commands:
`git clone https://github.com/YuriWitney/nlw-esports-server`

- For npm users
  `npm install`

- For yarn users:
  `yarn install`

# Routes

The routes that the API offers are as follows:

- **(GET) /games**
Lists the available games
- **(GET) /games/:id/ads**
Lists the ads of a game
- **(POST) /games/:id/ads**
Creates a new ad in a game
- **(GET) /ads/:id/discord**
Lists the Discord of the ads' announcer 

# Tools and lessons viewed
- Prisma ORM using SQLite.
- Prisma/Client for auto-generated query builder and enables type-safe database access.
- Cors for secure API accessing.
- express for API routes.
- ts-node-dev for running TS files and restart the application when files is modified.

# Techs

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![GitHub Actions](https://img.shields.io/badge/githubactions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)![Prisma Code](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)


# References

- [Rocketseat](https://github.com/Rocketseat)
