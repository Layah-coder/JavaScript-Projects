/*
 * Lost Fortune 4.0
 * Leah Oswald
 * COP 2801 JavaScript class# 1320
 */


//Holds adventurers.
let adventurers = 6;
//Holds number of adventurers killed.
let killed = 3;
//Holds number of survivors.
let survivors = adventurers - killed;
//Holds leaders name.
let leader = "";
//Holds user lives.
let lives = 3;
//Holds value to allow user to play game.
let play = 'y';
//Allows user to trade items in inventory.
let switchInventory = 'y';
//Allows user to decide to display inventory or pick up item.
let foundItem = 'a';
//Index of item in inventory picked by user.
let itemIndex = 0;
//Holds current health.
let health = 100;

//Array initialized with the names of adventures.
var adventureNames = ["Peter", "Batman", "Hillary", "Canbi", "Debra", "Dexter"]

//Import inventory module.
var Inventory = require("./inventory");
//Create instance of inventory object.
var inventory = new Inventory();

//Constant variable to use readline.
const readlineSync = require('readline-sync');

//Display game name.
console.log("_________________________________________")
console.log("\tWelcome to Lost Fortune!");
console.log("_________________________________________\n")

//Call function to assign leader name.
leader = getLeader();

//Begin first loop of game.
do {

    //Call function to display game introduction.
    displayIntroduction();

    //Display game event.
    console.log("One early morning while the team was still resting, a polar bear attacked the explorers killing " + killed + " people.");
    console.log("This left the team with only " + survivors + " survivors left.");

    //Display game stats.
    console.log("\nLeader: " + leader);
    console.log("Adventurers: " + adventurers);
    console.log("Adventurers Killed: " + killed);
    console.log("Survivors: " + survivors);
    //Call function that displays player stats: health & lives.
    displayStats();
    //Call function that displays menu of choices for the player to do next.
    displayMenu();

    //Prompt user to enter a choice and assign to variable choice, use readline function: question. 
    let choice = parseInt(readlineSync.question("Enter the number of your choice: "));

    //Test 'choice' from user input against different cases.
    switch (choice) {
        case 1:
            console.log("The team decided the best way to honor their fallen members was to bury them." +
                " They realized they could not dig in the frozen ground and decided to pack up their camp and continue on their journey.\n");
            //Call function to display user health & lives remaining.
            displayStats();
            //Break out of switch.
            break;
        case 2:
            console.log("The team realized their resources were limited and wasted time could result in more casualties." +
                " The team packed up their belongings and continued on their journey.\n");
            //Prompt user for input and hold in foundItem. 
            foundItem = readlineSync.question("You found a Fish on the ground.\na. Display inventory.\nb. Pick up item.\nEnter your next choice: ");
            //If user picks option a, call function from inventory object to display players inventory.
            if (foundItem == 'a') {
                inventory.displayInventory();
            }

            //If user picks option b, call function from inventory object to pick up item.
            else if (foundItem == 'b') {
                inventory.addToInventory();
            }
            //Call function to display player health & lives.
            displayStats();
            break;
        case 3:
            console.log("After an insane battle with a polar bear the team was famished. They quickly began to make breakfast and then shortly after packed up camp and continued on their journey.\n");
            //Prompt user for input and hold in foundItem. 
            foundItem = readlineSync.question("You found a Fish on the ground.\na. Display inventory.\nb. Pick up item.\nEnter your next choice: ");
            //If user picks option a, call function from inventory object to display inventory.
            if (foundItem == 'a') {
                inventory.displayInventory();
            }

            //If user picks option b, call function from inventory object to pick up item.
            else if (foundItem == 'b') {
                inventory.addToInventory();
            }
            //Call function to display players lives & health.
            displayStats();
            break;
        case 4:
            console.log("\nFeeling anger and grief the team decides to set out to kill the polar bear." +
                " They followed the tracks to the bears snow den where they ended up all being attacked by the polar bear.\n")
            //Pass current value of health to function that returns a new value and assigns to health. Updates health after being attacked by bear.
            health = doDamage(health);
            //If health gets to zero subtract a life.
            if (health <= 0) {
                console.log("\nYou are out of health and have now lost a life.")
                lives -= 1;
                //Reassign full health to player.
                health = 100;
            }
            //Call function to display players health & lives.
            displayStats();
            break;
        //Display if user enters anything but 1, 2, 3, 4.
        default:
            console.log("Invalid choice.");
    }

    //Prompt user to play game again and assign to variable play.
    play = readlineSync.question("Would you like to play again(y/n): ");
}
//Repeat do statements until user enters something other then 'y'.
while (play == 'y')


//Function that displays the games introduction.
function displayIntroduction() {
    //Display introduction paragraph to game. 
    console.log("\n" + leader + " is leading a team of adventurers through the frozen arctic circle.\nTheir team members are: ");

    //Loop that displays the elements stored in adventureNames.
    for (var i = 0; i < adventureNames.length; i++) {
        console.log(adventureNames[i])
    }

    console.log("\nThe adventurers are in search of a legendary magical stone that was said to be on a lost viking ship. " +
        "Despite all the dangers, " + leader + " and the team feel confident they will find what they are looking for.\n");
}

//Function that prompts user to enter leader name and returns it.
function getLeader(name) {
    //Prompt user to enter name and assign to variable leader, use readline function: question.
    name = readlineSync.question("Enter leader name: ");
    return name;
}

//Function that displays the menu choices.
function displayMenu() {
    //Display choices to user that will progress the story.
    console.log("\nThe remaining team had to make a decision as to how they would proceed after the casualties.\n");
    console.log("1.) Bury their dead.");
    console.log("2.) Continue on their journey.");
    console.log("3.) Make breakfast.");
    console.log("4.) Kill the polar bear.")
}

//Function that takes current health as argument, updates health, and returns new value of health.
function doDamage(health) {
    health -= 20;
    return health;
}

//Function that displays the current health and lives of user.
function displayStats() {
    //Display user health.
    console.log("Remaining Health: " + health);
    //Display user lives remaining.
    console.log("Remaining Lives: " + lives);
}



