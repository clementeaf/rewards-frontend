FROM node:10-buster

# Install bower and ember-cli globally
RUN npm install -g bower@1.8.14 ember-cli@2.8.0

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bower.json .bowerrc ./

# Install dependencies (skip optional to avoid phantomjs issues)
RUN npm install --no-optional && bower install --allow-root

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 4203

# Start the application
CMD ["npm", "start"]