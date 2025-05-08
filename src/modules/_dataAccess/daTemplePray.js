import indexAjaxData from '../ajax/indexAjaxData';
import pray from '../app/temple/pray';
import $dataAccess from './$dataAccess';

async function templePray(myGod) {
  const response = { s: false };
  const data = await indexAjaxData({
    cmd: 'temple',
    subcmd: 'pray',
    type: myGod,
  });
  if (data) {
    response.s = true;
    response.pray_index = myGod;
  }
  return response;
}

export default function daTemplePray(myGod) {
  return $dataAccess(pray, templePray, myGod);
}
