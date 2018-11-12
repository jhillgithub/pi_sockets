FROM node:11.1.0-stretch

COPY ./piapp /app
WORKDIR /app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["node", "server"]
