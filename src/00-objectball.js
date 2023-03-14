function gameObject(){
return {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: [
      {
        playerName: "Alan Anderson",
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
      },
      {
        playerName: "Reggie Evans",
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7
      },
      {
        playerName: "Brook Lopez",
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15
      },
      {
        playerName: "Mason Plumlee",
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5
      },
      {
        playerName: "Jason Terry",
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1
      }
    ]
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: [
      {
        playerName: "Jeff Adrien",
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2
      },
      {
        playerName: "Bismak Biyombo",
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10
      },
      {
        playerName: "DeSagna Diop",
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5
      },
      {
        playerName: "Ben Gordon",
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      },
      {
        playerName: "Brendan Haywood",
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12
      }
    ]
  }
}}


function numPointsScored(name){
  let homeTeamPlayer = gameObject().home.players;
  let awayTeamPlayer = gameObject().away.players;
  let player = homeTeamPlayer.find(player => player.playerName === name) || awayTeamPlayer.find(player => player.playerName === name)
  if(player){
    return player.points
  }else {return null}
};

console.log(numPointsScored("Brendan Haywood"))

function shoeSize(name){
  let homeTeamPlayer = gameObject().home.players;
  let awayTeamPlayer = gameObject().away.players;
  let player = homeTeamPlayer.find(player => player.playerName === name) || awayTeamPlayer.find(player => player.playerName === name)
  if(player){
    return player.shoe
  }else {return null}
};

console.log(shoeSize("Brendan Haywood"))

function teamColors(teams){
  let team = Object.values(gameObject());
  let nameOfTeam = team.find(t => t.teamName === teams)
  if(nameOfTeam){
    return nameOfTeam.colors;
  }
}

console.log(teamColors("Charlotte Hornets"))

function teamNames(){
  let home = gameObject().home.teamName;
  let away = gameObject().away.teamName;
  return [home,away];
}

function playerNumbers(teamName){
  let team = gameObject().home.teamName === teamName ? gameObject().home : gameObject().away;
  return team.players.map(t => t.number)
}
console.log(playerNumbers("Charlotte Hornets"))

function playerStats(name) {
  let homeTeamPlayer = gameObject().home.players;
  let awayTeamPlayer = gameObject().away.players;
  let player = homeTeamPlayer.find(player => player.playerName === name) || awayTeamPlayer.find(player => player.playerName === name)
  return {
    number: player.number,
    shoe: player.shoe,
    points: player.points,
    rebounds: player.rebounds,
    assists: player.assists,
    steals: player.steals,
    blocks: player.blocks,
    slamDunks: player.slamDunks
  }
}
console.log(playerStats("Brendan Haywood"))

function bigShoeRebounds(){
  let theLargestShoeSize = 0;
  let playerWithTheLargestShoeSize;
  for(let team of Object.values(gameObject())){
    for(let player of team.players){
      if(player.shoe > theLargestShoeSize){
        theLargestShoeSize = player.shoe
        playerWithTheLargestShoeSize = player;
      }
    }
  }
  return playerWithTheLargestShoeSize.rebounds;
}
console.log(bigShoeRebounds())


function mostPointsScored(){
  let mostPoints = 0;
  let mostPointsPlayer;
  for(let team of Object.values(gameObject())){
    for(let player of team.players){
      if(player.points > mostPoints){
        mostPoints = player.points
        mostPointsPlayer = player;
      }
    }
  }
  return mostPointsPlayer.playerName;
}
console.log(mostPointsScored())

function winningTeam(){
  let homePoints = 0;
  let awayPoints = 0;
  for(let i=0; i<home.players.length; i++){
    homePoints += home.players[i].points;
  }
  for(let i=0; i<away.players.length; i++){
    awayPoints += away.players[i].points;
  }
  if ( homePoints > awayPoints){
    return home.teamName;
  } else{away.teamName}
}

function playerWithLongestName(){
  let longestName = "";
  let playerWithLongestName = "";
  for(let team of Object.values(gameObject())){
    for(let players of team.players)
    if(players.playerName > longestName){
      longestName = players.playerName;
      playerWithLongestName = player;
    }
  }
  return playerWithLongestName.playerName;
}

function doesLongNameStealATon(){
  let longestName = "";
  let mostSteals = "";
  for(let team of Object.values(gameObject())){
    for(let players of team.players)
    if(players.steals > mostSteals){
      mostSteals = players.steals;
    }
    if (player.playerName.length > longestName.length) {
      longestName = player.playerName;
  }

  let playerWithLongestName = gameObject.find(p => p.playerName === longestName)
  return playerWithLongestName.steals === mostSteals;
  }
}