export default function generateRandom(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNum === exclude) return generateRandom(min, max, exclude);
  return rndNum;
}
