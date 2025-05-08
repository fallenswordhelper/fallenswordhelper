import setValue from '../../system/setValue';

export default function saveTempleSettings(needToPray) {
  setValue('needToPray', needToPray);
  setValue('lastTempleCheck', new Date()
    .setUTCHours(23, 59, 59, 999) + 1); // midnight
}
