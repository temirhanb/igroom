FROM node:lts as dependencies
WORKDIR /igrum
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /igrum
COPY . .
COPY --from=dependencies /igrum/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /igrum
ENV NODE_ENV production

COPY --from=builder /igrum/public ./public
COPY --from=builder /igrum/package.json ./package.json
COPY --from=builder /igrum/.next ./.next
COPY --from=builder /igrum/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]