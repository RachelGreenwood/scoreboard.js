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

console.log(updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73));