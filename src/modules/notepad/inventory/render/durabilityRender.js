export default function durabilityRender(_data, _type, row) {
  if (row.type < 9 && row.max_durability > 0) {
    return Math.floor((row.durability / row.max_durability) * 100);
  }
}
