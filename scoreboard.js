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

function removePlayer(scoreboard, player) {
  if (scoreboard.hasOwnProperty(player)) {
    delete scoreboard[player];
  }
  return scoreboard;
}

console.log(removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras'))