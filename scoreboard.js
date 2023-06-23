function createScoreBoard({player, score}) {
    let obj = {
        "The Best Ever": "1000000"
    }
  obj.name = player;
  obj.score = score;
  return obj;
}

function addPlayer(scoreboard, player, score) {
  scoreboard[player] = score;
  return scoreboard;
  //return createScoreBoard({player, score})
}

function updateScore(scoreboard, player, newScore) {
  scoreboard[player] = scoreboard[player] + newScore;
  return scoreboard;
}

function applyMondayBonus(scoreboard) {
  for (player in scoreboard) {
    scoreboard[player] = scoreboard[player] + 100;
  }
  return scoreboard;
}

const scoreBoard = {
  'Dave Thomas': 44,
  'Freyja Ćirić': 539,
  'José Valim': 265,
};

function normalizeScore(obj) {
  return normalize(obj.score);
}

function normalize(score) {
  return 2 * score + 10;
}

const params = { score: 400, normalizeFunction: normalize };

console.log(normalizeScore(params));