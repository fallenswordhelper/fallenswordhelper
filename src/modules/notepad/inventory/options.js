import deepClone from '../../common/deepClone';
import { defaultOptions } from './assets';
import fallback from '../../system/fallback';
import getValue from '../../system/getValue';

let options = {};
let showQuickDropLinks = 0;
let showQuickSendLinks = 0;

export const getOptions = () => options;
export const getShowQuickDropLinks = () => showQuickDropLinks;
export const getShowQuickSendLinks = () => showQuickSendLinks;

export function extendOptions(data) {
  options = { ...deepClone(defaultOptions), ...fallback(data, {}) };
  showQuickDropLinks = getValue('showQuickDropLinks');
  showQuickSendLinks = getValue('showQuickSendLinks');
}
