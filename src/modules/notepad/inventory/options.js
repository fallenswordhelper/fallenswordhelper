import deepClone from '../../common/deepClone';
import calf from '../../support/calf';
import fallback from '../../system/fallback';
import getValue from '../../system/getValue';
import { get } from '../../system/idb';
import { defaultOptions } from './assets';

let options = {};
let showQuickDropLinks = 0;
let showQuickSendLinks = 0;

export const getOptions = () => options;
export const getShowQuickDropLinks = () => showQuickDropLinks;
export const getShowQuickSendLinks = () => showQuickSendLinks;

export async function extendOptions() {
  const data = await get(`fsh_${calf.subcmd}`);
  options = { ...deepClone(defaultOptions), ...fallback(data, {}) };
  showQuickDropLinks = getValue('showQuickDropLinks');
  showQuickSendLinks = getValue('showQuickSendLinks');
}
