import runDefault from '../../common/runDefault';
import news from './loader/news';
import viewArchive from './loader/viewArchive';

const newsFsbox = () => { runDefault(import('../../news/newsFsbox')); };
const newsShoutbox = () => { runDefault(import('../../news/newsShoutbox')); };

export default {
  fsbox: { '-': newsFsbox },
  '-': { '-': news },
  shoutbox: { '-': newsShoutbox },
  viewupdatearchive: { '-': viewArchive },
  viewarchive: { '-': viewArchive },
};
