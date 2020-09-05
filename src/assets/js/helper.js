export function getColor(colorNumber) {
  let result = [];
  if (colorNumber >= 1024) {
    result.push("blue");
    colorNumber = colorNumber - 1024;
  }
  if (colorNumber >= 256) {
    result.push("green");
    colorNumber = colorNumber - 256;
  }
  if (colorNumber >= 64) {
    result.push("red");
    colorNumber = colorNumber - 64;
  }
  if (colorNumber >= 16) {
    result.push("yellow");
    colorNumber = colorNumber - 16;
  }
  if (colorNumber >= 4) {
    result.push("purple");
    colorNumber = colorNumber - 4;
  }
  if (colorNumber >= 1) {
    result.push("brown");
    colorNumber = colorNumber - 1;
  }
  if (colorNumber !== 0) console.error("sth went wrong");
  return result;
}
