import createRouter from './route';

let loading = null;

/**
 * Builds the router from the route data that ships with the helper (routeData.json in this folder). The data is its own file
 * so that it is only fetched, together with the helper's other files, when the panel is first opened. See README.md here for
 * how to update it.
 * @returns {Promise<object>} The router.
 * @throws {Error} When the data cannot be loaded.
 */
async function buildRouter() {
  try {
    const { default: data } = await import('./routeData.json');
    return createRouter(data);
  } catch (error) {
    loading = null;
    throw new Error(`Could not load the map data (${error.message})`, {
      cause: error,
    });
  }
}

/**
 * Loads the router once; later calls share the same promise until a load fails.
 * @returns {Promise<object>} The router.
 */
export default function loadRouter() {
  loading ??= buildRouter();
  return loading;
}
