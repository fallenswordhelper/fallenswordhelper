import news from './loader/news';
import runDefault from '../../common/runDefault';
import viewArchive from './loader/viewArchive';

const unknownPage = () => { runDefault(import('../unknownPage')); };

export default {
  news: { '-': news },
  viewupdatearchive: { '-': viewArchive },
  viewarchive: { '-': viewArchive },
  '-': { '-': unknownPage },
};
