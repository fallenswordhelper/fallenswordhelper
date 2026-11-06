import getValue from '../../../system/getValue';
import createRouter from './route';

// The route data (the same file the Path Finder website uses) is a static file on GitHub Pages;
// the browser keeps it for ten minutes between visits.
export const siteUrl = 'https://cristimirt.github.io/fspathfinder/';
const dataUrl = () => getValue('pathfinderDataUrl') || `${siteUrl}route.json`;

let loading = null;

/**
 * Downloads the route data and builds a router from it.
 * @returns {Promise<object>} The router.
 * @throws {Error} When the data cannot be loaded.
 */
async function fetchRouter() {
  const url = dataUrl();
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return createRouter(await response.json());
  } catch (error) {
    loading = null;
    throw new Error(
      `Could not load the map data (${error.message}) from ${url}`,
      { cause: error },
    );
  }
}

/**
 * Loads the router once; later calls share the same promise until a load fails.
 * @returns {Promise<object>} The router.
 */
export default function loadRouter() {
  loading ??= fetchRouter();
  return loading;
}
