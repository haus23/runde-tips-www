# base node image
FROM node:20-bookworm-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# enable pnpm
RUN corepack enable

# Install all node_modules, including dev dependencies
FROM base as deps

ENV NODE_ENV development

WORKDIR /app

ADD package.json pnpm-lock.yaml ./
RUN pnpm install

# Setup production node_modules
FROM base as production-deps

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json pnpm-lock.yaml ./
RUN pnpm install

# Build the app
FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN pnpm build

# Finally, the production image with minimal footprint
FROM base

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/package.json

VOLUME [ "/app/data" ]

EXPOSE 3000
CMD ["pnpm", "start"]
