
//Inventory module that holds functions that access inventory.
function inventory() {
    //Array that holds inventory items.
    var inventoryArr = ["Biscuit"];
    const readlineSync = require('readline-sync');

    //Function that can access items in inventory module.
    //Adds item to inventory.
    this.addToInventory = function () {
        //When inventory array is >=5 display inventory and ask user to pick item number they want to trade for.
        if (inventoryArr.length >= 5) {
            console.log("Inventory:");
            //Loop that displays all items in inventory array.
            for (var j = 0; j < inventoryArr.length; j++) {
                console.log((j + 1) + ") " + inventoryArr[j]);
            }
            //Prompt user for item that will be dropped.
            var itemIndex = readlineSync.question("Enter number of item you want to trade for: ");
            //Add new item to inventory.
            inventoryArr[itemIndex - 1] = "Fish";


        }
        //If inventory has space open, less than five items, add new item to last spot.
        else if (inventoryArr.length < 5) {
            inventoryArr.push("Fish");
        }
    }
    //Function that can access items in inventory module.
    //Displays inventory.
    this.displayInventory = function () {
        console.log("Inventory:");
        //Loop that displays all items in inventory array.
        for (var j = 0; j < inventoryArr.length; j++) {
            console.log((j + 1) + ") " + inventoryArr[j]);
        }
    }
}

//Export inventory module.
module.exports = inventory;

