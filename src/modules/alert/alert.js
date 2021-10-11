import { writable } from 'svelte/store';

const alert = writable('');

export { alert as default };
