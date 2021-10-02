export default function $dataAccess(appFn, fallbackFn, ...args) {
  const appBad = 0;
  if (appBad) {
    return fallbackFn(...args);
  }
  return appFn(...args);
}
