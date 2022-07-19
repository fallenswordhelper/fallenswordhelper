const byId = ({ id: ida }, { id: idb }) => ida - idb;
const justValue = ({ value }) => value;

export default function attribsToArray(attributes) {
  return attributes?.sort(byId).map(justValue);
}
