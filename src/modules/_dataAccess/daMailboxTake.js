import takeitems from '../app/tempinv/takeitems';
import $dataAccess from './$dataAccess';
import mailboxTake from './fallbacks/mailboxTake';

export default function daMailboxTake(invIdAry) {
  return $dataAccess(takeitems, mailboxTake, invIdAry);
}
