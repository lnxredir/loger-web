const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 5000; // port to acess the webserver

app.use(express.static('.')); // Serve static files from the current directory

app.get('/logs', (req, res) => {
    exec('docker logs CHANGE_ME --tail 50', (error, stdout, stderr) => { // defines the name of the container
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send(stderr);
        }
        res.send(stdout);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
