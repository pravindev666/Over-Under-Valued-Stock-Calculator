# Use the latest lightweight Nginx image
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the static files into the container
COPY src/main/resources/index.html ./
COPY src/main/resources/styles.css ./
COPY src/main/resources/script.js ./

# Expose the default HTTP port
EXPOSE 80

# CMD is not necessary because Nginx's default CMD is to run Nginx
