#!/usr/bin/env node

'use strict'

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const glob = require('glob');

function rename(filepath) {
  console.log('starting', filepath);
  const contents = fs.readFileSync(filepath, 'utf8');
  const moduleName = path.basename(filepath).replace('.js', '');
  const m = contents.match(/= function ?\(.*\) {/g);
  const newContents = contents.replace(/= function\(.*\)/g, (str) => {
    var name = moduleName + '_' + crypto.randomBytes(3).toString('hex');
    var line = str.replace(/function ?\(/, `function ${name}(`);
    return line;
  });
  fs.writeFileSync(filepath, newContents, 'utf8');
}

const dir = process.argv[2];
const wildcard = dir + '/**/*.js';
console.log('use', wildcard);

const files = glob.sync(wildcard);
files.forEach((relpath) => {
  const absPath = path.join(process.cwd(), relpath);
  rename(absPath);
});
