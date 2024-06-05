# Use the official Node.js image as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g expo-cli
RUN npm install --global @expo/ngrok@^4.1.0
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Expo CLI uses
EXPOSE 19000 19001 19002

# Start the Expo server
CMD ["npx", "expo", "start", "--tunnel"]
