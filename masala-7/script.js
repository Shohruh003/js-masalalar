function footballPoints(wins, draws, losses) {
  var result = wins * 3 + draws * 1 + losses * 0;
  return result;
}
console.log(footballPoints(1, 1, 1));