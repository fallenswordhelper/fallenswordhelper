'use strict';

const version = process.env.npm_package_version;
const varAry = version.split('.');
const core = varAry[0] + varAry[1];
const calfVer = varAry[2];

module.exports = { calfVer, core, version };
