import dialogMsg from '../common/dialogMsg';

export default function dialog(data) {
  if (!data) dialogMsg('AJAX Failed');
  if (data?.r !== 0) {
    dialogMsg(data.m);
  }
  return data;
}
