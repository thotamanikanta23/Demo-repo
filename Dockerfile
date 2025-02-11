# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
# This allows Docker to cache npm install step if dependencies haven't changed
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app runs on (default port for a Node.js app)
EXPOSE 80

# Run the app when the container starts
CMD ["npm", "start"]
