FROM oven/bun AS base
WORKDIR /opt/docusaurus

FROM base AS dev
WORKDIR /opt/docusaurus
EXPOSE 3000
CMD [ -d "node_modules" ] && bun run start -- --host 0.0.0.0 --poll 1000 || bun install && bun run start -- --host 0.0.0.0 --poll 1000

FROM base AS prod
WORKDIR /opt/docusaurus
COPY . /opt/docusaurus/
RUN bun ci
RUN bun run build

FROM prod AS serve
EXPOSE 3000
CMD ["bun", "run", "serve", "--", "--host", "0.0.0.0", "--no-open"]
