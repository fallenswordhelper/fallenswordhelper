'use strict';

function perfLogger(items) {
  items.getEntries().forEach((entry) => {
    console.log(entry.name, entry.duration);
  });
}

module.exports = perfLogger;
