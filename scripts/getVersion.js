'use strict';

const version = process.env.npm_package_version;
const varAry = version.split('.');
const [major, minor, calfVer] = varAry;
const core = major + minor;

module.exports = { calfVer, core, version };
