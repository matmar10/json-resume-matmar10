'use strict';

const express = require('express');
const path = require('path');

const app = express();

const publicDir = path.join(__dirname, 'public');
const indexFile = path.join(publicDir, 'resume.html');

app.use(express.static(publicDir));
app.get('/', (req, res) => res.sendFile(indexFile));

const port = process.env.PORT || 9090;
app.listen(port);
console.log(`Listening on port ${port}`);
