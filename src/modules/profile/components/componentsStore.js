import { SvelteMap } from 'svelte/reactivity';
import { derived, writable } from 'svelte/store';

export const compStore = writable(new SvelteMap());

export const total = derived(compStore, ($compStore) =>
  [...$compStore].reduce((acc, [, m]) => acc + (m.get('del')?.length ?? 0), 0),
);
