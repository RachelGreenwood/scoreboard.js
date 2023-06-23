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

console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373))