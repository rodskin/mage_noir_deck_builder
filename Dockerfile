FROM node:14.14.0

WORKDIR /vue_app

RUN npm install

#COPY ./vue_app/ .

CMD ["npm", "run", "serve"]
