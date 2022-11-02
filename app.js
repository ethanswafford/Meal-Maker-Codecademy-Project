// We’ ll hold the meal, price, and their respective getters and setters in an object named menu.
// In app.js, create an empty menu object.

// The menu object will hold the meal and price of Today’s Special as properties and they shouldn’t be altered directly.
// Within the menu object, create a _meal property with a value of an empty string('').
// This will eventually hold the name of the meal.

// Next, add a _price property with a value of 0.
// This will eventually hold the price of the meal, and should also not be altered directly.


// We know properties that begin with _ should not be directly manipulated. But just to validate this knowledge, let’s test it out!
// Below the menu object, directly manipulate the two properties by assigning _meal a number value and _price a string value.
// Then, below the new assignments, console.log() the menu object to see how not type checking these values could cause confusion
// for a website visitor!

// To safely reassign the two menu properties, we can add setters that type check the values being assigned.
// Below the properties, use the set keyword to create a meal setter method with mealToCheck as a parameter.Leave the
// function body empty
// for now.

// In the body of the setter method, create an if statement that checks if mealToCheck is a string. 
// If it is, return the object’s _meal property with mealToCheck assigned as the value.





let menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return menu.meal = mealToCheck;
        }

    }
}


/* menu._meal = 3;
 menu._price = 'tree fiddy';
 console.log(menu); */

console.log('CONNECTED');