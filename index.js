require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`\n*** Server Running on [\x1b[32mhttp://localhost:\x1b[0m\x1b[34m${port}\x1b[0m\x1b[37m] ***\x1b[0m\n`); 
});