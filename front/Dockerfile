# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Build the production-ready application
RUN npm run build

# Set the command to run the application
CMD [ "npm", "start" ]
