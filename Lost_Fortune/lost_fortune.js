/*
 * Lost Fortune
 * Leah Oswald
 * COP 2801 JavaScript class# 1320
 */

//Holds adventurers.
let adventurers = 8;
//Holds number of adventurers killed.
let killed = 3;
//Holds number of survivors.
let survivors = adventurers - killed;
//Holds leaders name.
let leader = "Jackson";

//Display game name.
console.log("_________________________________________")
console.log("\tWelcome to Lost Fortune!");
console.log("_________________________________________\n")

//Display introduction paragraph to game. 
console.log(leader + " is leading a team of adventurers through the frozen arctic circle." +
    " The adventurers are in search of a legendary magical stone that was said to be on a lost viking ship. " +
    "Despite all the dangers, " + leader + " and the team feel confident they will find what they are looking for.\n");

//Display game event.
console.log("One early morning while the team was still resting, a polar bear attacked the explores killing " + killed + " people.");
console.log("This left the team with only " + survivors + " survivors left.");

//Display game stats.
console.log("\nLeader: " + leader);
console.log("Adventurers: " + adventurers);
console.log("Adventurers Killed: " + killed);
console.log("Survivors: " + survivors);
