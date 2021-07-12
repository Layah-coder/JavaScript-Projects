/*
 * Lost Fortune 3.0
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

//Array initialized with the names of adventures.
var adventureNames = ["Peter", "Batman", "Hillary", "Canbi", "Debra", "Dexter"]

//Array that holds inventory items.
var inventory = ["Biscuit"];

//Constant variable to use readline.
const readlineSync = require('readline-sync');

//Display game name.
console.log("_________________________________________")
console.log("\tWelcome to Lost Fortune!");
console.log("_________________________________________\n")

//Prompt user to enter name and assign to variable leader, use readline function: question.
leader = readlineSync.question("Enter leader name: ");

//Begin first loop of game.
do {
    //Display introduction paragraph to game. 
    console.log("\n" + leader + " is leading a team of adventurers through the frozen arctic circle.\nTheir team members are: ");

    //Loop that displays the elements stored in adventureNames.
    for (var i = 0; i < adventureNames.length; i++) {
        console.log(adventureNames[i])
    }

    console.log("\nThe adventurers are in search of a legendary magical stone that was said to be on a lost viking ship. " +
        "Despite all the dangers, " + leader + " and the team feel confident they will find what they are looking for.\n");

    //Display game event.
    console.log("One early morning while the team was still resting, a polar bear attacked the explores killing " + killed + " people.");
    console.log("This left the team with only " + survivors + " survivors left.");

    //Display game stats.
    console.log("\nLeader: " + leader);
    console.log("Adventurers: " + adventurers);
    console.log("Adventurers Killed: " + killed);
    console.log("Survivors: " + survivors);

    //Display choices to user that will progress the story.
    console.log("\nThe remaining team had to make a decision as to how they would proceed after the casualties.\n");
    console.log("1.) Bury their dead.");
    console.log("2.) Continue on their journey.");
    console.log("3.) Make breakfast.");
    console.log("4.) Kill the polar bear.")

    //Prompt user to enter a choice and assign to variable choice, use readline function: question. 
    let choice = parseInt(readlineSync.question("Enter the number of your choice: "));

    //Test 'choice' from user input against different cases.
    switch (choice) {
        case 1:
            console.log("The team decided the best way to honor their fallen members was to bury them." +
                " They realized they could not dig in the frozen ground and decided to pack up their camp and continue on their journey.\n");
            //Display user lives remaining.
            console.log("Remaining Lives: " + lives + "\n");
            //Break out of switch.
            break;
        case 2:
            console.log("The team realized their resources were limited and wasted time could result in more casualties." +
                " The team packed up their belongings and continued on their journey.\n");
            //Prompt user for input and hold in foundItem. 
            foundItem = readlineSync.question("You found a Fish on the ground.\na. Display inventory.\nb. Pick up item.\nEnter your next choice: ");
            //If user picks option a display inventory.
            if (foundItem == 'a') {
                console.log("Inventory:");
               
                //Loop that displays all items in inventory array.
                for (var j = 0; j < inventory.length; j++) {              
                    console.log((j + 1) + ") " + inventory[j]);
                }
            }
            //If user picks option b, pick up item.
            else if (foundItem == 'b') {
                //When inventory is full, 5 items or more.
                if (inventory.length >= 5) {
                    //Prompt user if they would like to exchange new item with last item in inventory.
                    switchInventory = readlineSync.question("Inventory is full. Would you like to trade for the new item?(y/n): ");
                    if (switchInventory == 'y') {
                        //Loop that displays all items in inventory array.
                        for (var j = 0; j < inventory.length; j++) {
                            console.log((j + 1) + ") " + inventory[j]);
                        }
                        //Prompt user for item that will be dropped.
                        itemIndex = readlineSync.question("Enter number of item you want to trade for: ");
                        //Add new item to inventory.
                        inventory[itemIndex - 1] = "Fish";
                    }
                }
                //If inventory has space open, less thank five items, add new item to last spot.
                else if (inventory.length <= 5) {
                    inventory.push("Fish");
                }
            }
            console.log("Remaining Lives: " + lives + "\n");
            break;
        case 3:
            console.log("After an insane battle with a polar bear the team was famished. They quickly began to make breakfast and then shortly after packed up camp and continued on their journey.\n");
            
            //Prompt user for input and hold in foundItem. 
            foundItem = readlineSync.question("You found a Rock on the ground.\na. Display inventory.\nb. Pick up item.\n Enter your next choice: ");
            //If user picks option a display inventory.
            if (foundItem == 'a') {
                console.log("Inventory:");

                //Loop that displays all items in inventory array.
                for (var j = 0; j < inventory.length; j++) {
                    console.log((j + 1) + ") " + inventory[j]);
                }
            }
            //If user picks option b, pick up item.
            else if (foundItem == 'b') {
                //When inventory is full, 5 items or more.
                if (inventory.length >= 5) {
                    //Prompt user if they would like to exchange new item with last item in inventory.
                    switchInventory = readlineSync.question("Inventory is full. Would you like to trade for the new item?(y/n): ");
                    if (switchInventory == 'y') {
                        //Loop that displays all items in inventory array.
                        for (var j = 0; j < inventory.length; j++) {
                            console.log((j + 1) + ") " + inventory[j]);
                        }
                        //Prompt user for item that will be dropped.
                        itemIndex = readlineSync.question("Enter number of item you want to trade for: ");
                        //Add new item to inventory.
                        inventory[itemIndex - 1] = "Rock";
                    }
                }
                //If inventory has space open, less thank five items, add new item to last spot.
                else if (inventory.length <= 5) {
                    inventory.push("Rock");
                }
            }
            console.log("Remaining Lives: " + lives + "\n");
            break;
        case 4:
            console.log("Feeling anger and grief the team decides to set out to kill the polar bear." +
                " They followed the tracks to the bears snow den where they ended up all being killed by the polar bear.\n")
            //Subtract 1 from user lives any time user chooses scenario 4.
            lives -= 1;
            console.log("Remaining Lives: " + lives + "\n");
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