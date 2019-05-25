const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const youtubedl = require('youtube-dl');

dotenv.config();
const app = express();
const port = process.env.PORT;
const static_folder = process.env.STATIC_FOLDER;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, static_folder)));

const fetchVideoInfo = (videoLink) => {
    return new Promise((resolve, reject) => {
        youtubedl.getInfo(videoLink,[], [], function(err, info) {
            if (err) reject(err);
            resolve(info);
        });
    });
};

app.get('/video-info', (req, res) => {
    let videoLink = req.query["link"];
    fetchVideoInfo(videoLink).then(videoInfo => {
        res.set({
            'Access-Control-Allow-Origin': '*'
        });
        res.send(videoInfo);
    })
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, static_folder, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}...`));