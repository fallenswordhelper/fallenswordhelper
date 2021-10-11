import { derived, writable } from 'svelte/store';

export const compStore = writable(new Map());

export const total = derived(
  compStore,
  ($compStore) => [...$compStore].reduce((acc, [, m]) => acc + (m.get('del')?.length ?? 0), 0),
);
