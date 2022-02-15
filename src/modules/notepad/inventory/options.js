import deepClone from '../../common/deepClone';
import { defaultOptions } from './assets';
import fallback from '../../system/fallback';
import getValue from '../../system/getValue';

export let options;
export let showQuickDropLinks;
export let showQuickSendLinks;

export function extendOptions(data) {
  options = { ...deepClone(defaultOptions), ...fallback(data, {}) };
  showQuickDropLinks = getValue('showQuickDropLinks');
  showQuickSendLinks = getValue('showQuickSendLinks');
}
