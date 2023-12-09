//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var manager = [
    managerName, managerAge, currentTeam, trophiesWon
  ]
  return manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(form){
  if(form.length==0){
    return null;
  }
  var player = {
    defender: formation[0],
    midfield : formation[1],
    forward : formation[2]
  }
  return player;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var y = players.filter(ply=>ply.debut==year);
  return y;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var y =players.filter(ply=>ply.position==position);
  return y;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let array=[];
  for(let i=0; i<players.length; i++){
    for (let j=0; j<players[i].awards.length; j++){
      if(players[i].awards[j].name===awardName){
        array.push(players[i])
      }
    }
  }
  return array;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(award,noOfTimes){
  let x = [];
  let numb = 0, m=0;
  let j;
  for(let i=0; i<players.length;i++){
    for(j=0; j<players[i].awards.length; j++){
      if (players[i].awards[j].name==award){
        numb++;
      }
    }
    if(numb==noOfTimes){
      x.push(players[i]);
    }
    numb = 0;
  }
  return x;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country) {
  var awa =filterByAward(awardName);
  var y =awa.filter(ply=>ply.country==country);
  return y;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
  var y =players.filter(ply=>(ply.age<age &&ply.team==team && ply.awards.length));
  return y;
}

//Progression 9 - Sort players in descending order of their age
function sortByAge(){
  for(let i=0; i<players.length; i++){
    for (let j=i+1; j<players.length; j++){
      if(players[i].age<players[j].age){
        let a =players[i];
        players[i] = players[j];
        players[j]=a;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  let numb = 0;
  let nplayer =[];
  for(let i=0; i<players.length; i++){
    if(players[i].team ==team){
      nplayer[numb++] = players[i];
    }
  }
  for(let i=0; i<nplayer.length; i++){
    for(let j = i+1; j<nplayer.length; j++){
      if(nplayer[i].awards.length<nplayer[j].awards.length){
        let a = nplayer[i];
        nplayer[i] = nplayer[j];
        nplayer[j] = a;
      }
    }
  }
  return nplayer;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName,noOfTimes){
  let value =0;
  if(awardName.name >noOfTimes.name){
    value =1;
  } else if(awardName.name<noOfTimes.name){
    value= -1;
  } else{
    value = 0;
  }
}

function sortName(award,noOfTimes,country){
  var yOne = filterByAwardxTimes(award,noOfTimes);
  var yTwo = yOne.filter(ply=>ply.country ==country);
  return yTwo.sort(SortByNamexAwardxTimes);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(age){
  var y = players.filter(ply=>ply.age>age);
  return y;
}




