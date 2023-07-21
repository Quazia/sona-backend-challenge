FROM node:18-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY ./src ./src
COPY ./nest-cli.json ./
COPY ./tsconfig.build.json ./
COPY ./tsconfig.json ./

RUN yarn global add @nestjs/cli
RUN yarn install --frozen-lockfile --only=production

RUN yarn run build

ENV PORT 3000
ENV PORT 9229

CMD ["node", "dist/main"]
