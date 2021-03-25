export default function $dataAccess(appFn, fallbackFn, ...args) {
  const appBad = false;
  if (appBad) {
    return fallbackFn(...args);
  }
  return appFn(...args);
}
