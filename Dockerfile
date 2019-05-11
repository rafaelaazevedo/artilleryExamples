FROM node:dubnium-alpine
COPY . .
RUN npm install
ENTRYPOINT ["/usr/local/bin/npm", "run"]