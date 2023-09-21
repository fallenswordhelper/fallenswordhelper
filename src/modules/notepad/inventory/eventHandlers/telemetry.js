import sendEvent from '../../../analytics/sendEvent';

export const headerEvent = (type) => { sendEvent('Inventory', 'Header', type); };
export const invEvent = (type) => { sendEvent('Inventory', 'Datatable', type); };
