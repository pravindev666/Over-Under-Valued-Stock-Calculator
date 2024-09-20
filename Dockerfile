# Use a lightweight web server
FROM nginx:alpine

# Copy HTML, CSS, and JS files to the appropriate location
COPY src/main/resources/index.html /usr/share/nginx/html/
COPY src/main/resources/styles.css /usr/share/nginx/html/
COPY src/main/resources/script.js /usr/share/nginx/html/

# Expose the default port
EXPOSE 80
