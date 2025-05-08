export default function makeBuffPackageJson(data) {
  const buffPackage = {
    id: data.id,
    casts: data.casts,
    package_name: data.name,
  };
  if (data.gold) {
    buffPackage.gold_cost = data.gold;
  } else {
    buffPackage.point_cost = data.points;
  }
  data.buffs.forEach((buff, index) => {
    buffPackage[`buff_level_${index}`] = buff.level;
    buffPackage[`buff_type_${index}`] = buff.id;
  });
  return buffPackage;
}
