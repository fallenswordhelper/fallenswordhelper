import dialogMsg from './dialogMsg';

export default function errorDialog(json) {
  if (json && !json.s && json.e?.message) {
    dialogMsg(json.e.message);
  }
  return json;
}
