import { writable } from 'svelte/store';

const alert = writable('');

// eslint-disable-next-line no-restricted-exports
export { alert as default };
