/*
 * Leah Oswald
 * COP2801 JavaScript
 * 2/23/2021
 * 
 * 
 * 
 * 
 
Any good gaming console can load multiple games. For this assignment implement the following classes and behaviors.

1. Create a Game Class. The constructor for the Game class should take the games name as an argument.

2. Create a GameConsole Class. The constructor should create an empty array named games. Give the GameConsole a function called load. The load function should 
create three new Game objects, "Zelda", "Halo", and "Mario" and put them in the games array.

3. Give the GameConsole a function named log. This function should iterate over the games array and display the name of each game the console has loaded.

Assignment 6:

In your game console class from the last assignment, add a start function. The start function should prompt the user for an email address.
Use a regular expression to validate that it is a valid email address and prompt them again until they enter a valid one.
Next, prompt the user to enter a credit card number. Use a regular expression to validate the credit card.
Prompt them again until they enter a valid one. Once done, display the game menu.

*/


//More secure/strict code syntax.
'use strict';
//Needed for user input.
const readlineSync = require('readline-sync');


//Game class.
class Game {
    //Constructor that takes name as an argument.
    constructor(name) {
        //Assigns name to this class name.
        this.name = name;
    }
}


//GameConsole class.
class GameConsole {
    //Constructor.
    constructor() {
        //Create an empty array named games.
        this.games = new Array();
    }

    //Function that adds objects to array.
    load() {
        //Create three Game objects.
        const zelda = new Game("Zelda");
        const halo = new Game("Halo");
        const mario = new Game("Mario");

        //Put objects in games array.
        this.games.push(zelda);
        this.games.push(halo);
        this.games.push(mario);

    }

    //Function that displays objects in array.
    log() {
        for (var i = 0; i <this.games.length; i++) {
            console.log(this.games[i]);
        }
    }

    //Function that prompts user for emails and credit card info.
    start() {
        //Holds regular expression values of acceptable input.
        var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validCreditCard = /^([0-9]{16})$/;
        //Boolean values to continue prompting user for input.
        var validE;
        var validCC;
        //Continue prompting user for input until a vaild email address is entered.
        while (!validE) {
            var email = readlineSync.question("Enter an email address: ");
            if (email.match(validEmail)) {
                validE = true;
            }
            else {
                console.log("Invalid email, try again.");
                validE = false;
            }
        }
        //Continue prompting user for input until a 16 digit credit number is entered.
        while (!validCC) {
            var creditCard = readlineSync.question("Enter a 16 digit credit card number: ");
            if (creditCard.match(validCreditCard)) {
                validCC = true;
            }
            else {
                console.log("Invalid credit card, try again.");
                validCC = false;
            }
        }
    }
}

//Uses classes to start game console, load games, and display menu of games available.
var gcLog = new GameConsole();
gcLog.start();
gcLog.load();
gcLog.log();



