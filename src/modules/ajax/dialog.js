import dialogMsg from '../common/dialogMsg';

export default function dialog(data) {
  if (!data) dialogMsg('AJAX Failed');
  else if (data.r !== 0 && data.m) dialogMsg(data.m);
  return data;
}
