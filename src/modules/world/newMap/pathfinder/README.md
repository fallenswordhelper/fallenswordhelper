# Path Finder

The Path Finder panel of the world map. 

- `routeData.json` is the map data (areas, stairs, portals, world map exits). It is **updated by hand** when the game gets new areas.
- `route.js` builds the graph from that data and finds the cheapest route.
## Updating the data

Replace `routeData.json` with the new data file (same format: `built`, `worlds`, `areas`) and run `npm run test`.
`routeData.json` is left out of Prettier on purpose (it is one 2 MB generated line); do not reformat it.

If the way `route.js` reads the data changes, update it here too.
