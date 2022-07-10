'use strict';

const {
  accessSync,
  mkdirSync,
  readdirSync,
  rmSync,
} = require('fs');
const path = require('path');

function cleanTarget(filepath) {
  let accessErr = false;
  try {
    accessSync(filepath);
  } catch (error) {
    accessErr = true;
  }

  if (accessErr) {
    mkdirSync(filepath, { recursive: true });
  }

  const files = readdirSync(filepath);
  if (files.length > 0) {
    files.forEach((filename) => {
      rmSync(path.join(filepath, filename), { recursive: true });
    });
  }
}

module.exports = cleanTarget;
