FROM node:23-alpine

# Create a non-root user
RUN addgroup app && adduser -S -G app app

# Set working directory
WORKDIR /app

# Copy package.json files first to cache dependencies
COPY package*.json ./

# Install dependencies
ENV NODE_ENV=development
RUN npm install

# Copy the rest of the application
COPY . .

# Set root user temporarily for permissions
USER root
RUN chown -R app:app /app

# Switch to non-root user
USER app

# Expose the application port
EXPOSE 5173

# Use JSON format for CMD
CMD ["npm", "run", "dev"]
