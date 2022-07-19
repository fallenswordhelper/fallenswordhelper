import { derived, writable } from 'svelte/store';

export const processingStatus = writable(['statusStore', 'Done.']);

let statusUpdates = [];

export const trackStatus = derived(processingStatus, ($processingStatus, set) => {
  // console.log('$processingStatus', $processingStatus);
  const thisStatus = statusUpdates.find(([source]) => source === $processingStatus[0]);
  if (thisStatus) [, thisStatus[1]] = $processingStatus;
  else statusUpdates = [...statusUpdates, $processingStatus];
  const lastStatus = statusUpdates.find(([, status]) => status !== 'Done.');
  // console.log('statusUpdates', statusUpdates);
  set(lastStatus?.[1] ?? 'Done.');
});
