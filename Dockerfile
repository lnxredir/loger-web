# runtime as the base image
FROM node:16-alpine

# sets the working directory inside the container
WORKDIR /usr/src/app

# copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# copy the rest of the files
COPY . .

# exposes the port the app runs on
EXPOSE 3000

# starts the application
CMD [ "npm", "start" ]
