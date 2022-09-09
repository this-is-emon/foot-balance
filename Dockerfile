# Base Image
FROM node:16-alpine
# Setting up node env
ENV NODE_ENV=production
RUN npm install -g serve
# Setting up workspace
WORKDIR /app
# Copy only required files for downloading
# node modules for caching purposes
COPY package.json package-lock.json ./
# Downloading node modules
RUN npm ci
# Copy application to the workspace
COPY . .
# Building production build
RUN npm run build
# Setting up and exposing dev server port
ENV PORT=3000
EXPOSE ${PORT}
USER node
# Starting dev server
CMD serve -s build
