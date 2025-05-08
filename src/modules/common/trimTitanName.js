export default function trimTitanName(titanName) {
  return titanName.replace(' (Titan)', '').replace(' (STF Titan)', '');
}
