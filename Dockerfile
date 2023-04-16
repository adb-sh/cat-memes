FROM node:alpine

EXPOSE 3000
ADD . .

RUN npm ci && npm run build

CMD ["npm", "run", "start"]
