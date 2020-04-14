'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const str = fs.readFileSync(path.join(__dirname, 'resume.yml'), 'utf8');
const resume = yaml.safeLoad(str);
const resumeJson = JSON.stringify(resume, null, 2);
fs.writeFileSync(path.join(__dirname, 'resume.json'), resumeJson);
