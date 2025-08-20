let vcodeTable;
export default async function getVcode(itemId) {
  if(!vcodeTable) {
    vcodeTable = await import('../../support/molds/componentVcodes.json');
  }
  return vcodeTable[itemId];
}
