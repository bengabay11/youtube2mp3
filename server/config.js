const dotenv = require('dotenv');
dotenv.config();

const config = {
    app: {
        port: process.env['PORT'] || 3000,
        staticFolder: process.env['STATIC_FOLDER'] || 'client/build'
    }
};

module.exports = config;