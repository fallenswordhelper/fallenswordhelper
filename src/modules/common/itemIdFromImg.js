export default function itemIdFromImg(img) {
  if (!img?.src) return;
  return img.src.split('/').at(-1).split('.')[0];
}
