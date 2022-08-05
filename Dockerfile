FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

COPY . .

RUN chown -R node /usr/src/app

RUN mkdir node_modules
RUN chown node /usr/src/app/node_modules

RUN yarn

# !! must change perms prior to changing user
USER node

EXPOSE 3000

CMD ["yarn", "start"]
