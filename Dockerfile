FROM node:18 as BUILD

WORKDIR /usr/src/app

# Add pruning packages for use later.
RUN curl -sf https://gobinaries.com/tj/node-prune | sh

COPY package*.json ./

# Locally we will run it using
RUN npm ci --omit=dev --ignore-scripts

# Prune the source code.
RUN npm prune --production
RUN node-prune

COPY . .

# Build final image using small base image.
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=BUILD /usr/src/app /usr/src/app

# Set permissions for node app folder after copy.
RUN chown -R node:root /usr/src/app/
RUN chmod -R 775 /usr/src/app/

# Switch to node user.
USER node

# Image start commands.
ENTRYPOINT [ "npm" ]
CMD [ "start" ]
