FROM node:lts-hydrogen

WORKDIR /app
COPY package*.json ./
RUN set -eux & apk add --no-cache yarn
RUN yarn install

COPY src ./src
COPY public ./public

RUN yarn run build

EXPOSE 3000
CMD [ "yarn", "start" ]