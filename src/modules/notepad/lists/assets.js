import { ahSearchUrl } from '../../support/constants';
import getValueJSON from '../../system/getValueJSON';

export const auctionSearchBlurb =
  '<div>This screen allows you to set up some quick ' +
  'search templates for the Auction House. The Display on AH column ' +
  'indicates if the quick search will show on the short list on the ' +
  'Auction House main screen. A maximum of 36 items can show on this ' +
  'list (It will not show more than 36 even if you have more than 36 ' +
  'flagged). To edit items, either use the large text area below, or ' +
  'add a new entry and delete the old one. You can always reset the ' +
  'list to the default values.</div>' +
  '<div class="fshSmall" id="fshAso">' +
  '</div>';

export function auctionSearchParams() {
  return {
    id: 'fshAso',
    headers: ['Category', 'Nickname', 'Quick Search Text', 'Display in AH?'],
    fields: ['category', 'nickname', 'searchname', 'displayOnAH'],
    tags: ['text', 'text', 'text', 'checkbox'],
    url: ['', '', `${ahSearchUrl}@replaceme@`, ''],
    currentItems: getValueJSON('quickSearchList') || [],
    gmname: 'quickSearchList',
    categoryField: 'category',
  };
}
