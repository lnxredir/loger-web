A simple web-based interface for viewing the real-time logs of a Docker container. It features a clean, user-friendly web page that displays the latest lines of container logs, updated dynamically every second. The logs are color-coded for better readability, and the page uses minimal styling to keep the interface straightforward and focused on the logs.

**See a live preview running a Cowrie SSH honeypot (https://github.com/cowrie/cowrie) here: https://honeypot.frail.com.br/**

**Key Features:**

- Real-time Log Streaming: The web page updates automatically every second to display the last lines of the Docker container logs.
- Log Color-Coding: Certain log patterns like timestamps, command statuses (e.g., "Command found" and "Command not found"), and events are highlighted with different colors using inline CSS.
- Minimalistic Interface: The web page is simple with no buttons or controls, showing only the log output and a title. It uses basic inline CSS to display white text on a black background for a clean look.
- Node.js and Express Backend: The backend, built using Node.js and Express, fetches the container logs via Docker's command-line interface and serves them to the front end.


**Use Cases:**

- Development & Testing: Helps developers easily monitor Docker container logs during development.
- Server Monitoring: Useful for system administrators to keep track of containerized services.
- Debugging: Provides real-time logs with color-coded highlights, making it easy to spot key events and errors.

**Running and building**:

To run the application under docker run:
- git clone https://github.com/lnxredir/loger-web
- cd loger-web
- docker build -t loger-web .
- docker run -d --restart unless-stopped -p 3000:3000 --link <your_container_name> loger-web

Using docker compose :
- git clone https://github.com/lnxredir/loger-web
- cd loger-web
- docker build -t loger-web .
- docker compose up -d

To run locally without docker you'll need to have Node.js, NPM and EXPRESS (installed using npm) then run:
- git clone https://github.com/lnxredir/loger-web
- cd loger-web
- node server.js
