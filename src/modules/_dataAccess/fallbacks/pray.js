import indexAjaxData from '../../ajax/indexAjaxData';

export default async function pray(myGod) {
  const response = { s: false };
  const data = await indexAjaxData({ cmd: 'temple', subcmd: 'pray', type: myGod });
  if (data) {
    response.s = true;
    response.pray_index = myGod;
  }
  return response;
}
