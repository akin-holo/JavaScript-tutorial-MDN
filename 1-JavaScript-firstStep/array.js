// Array is like a "list-like object". They are basically single objects that contain multiple values stored in a list.

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);


// modify an item in an array by giving a single array item a new value
shopping[0] = "tahini";

const multipleArray = ["three", "795", [0, 1, 2]];
console.log(multipleArray[2][2]);


// To add one or more items to the end of an array we can use push().
const cities = ["Machester", "Liverpool"];
cities.push("Chelsea");

console.log(cities);
const newLength = cities.push("Bristol");

// To add an item to the start of the array, use unshift():
cities.unshift("Edinburg");

// To remove the first item from an array, use shift():
const removeFirstItem = cities.shift();

// To remove the last item from the array, use pop().
cities.pop();
// The pop() method returns the item that was removed. To save that item in a new variable, you could do this:
const rmCities = cities.pop();
console.log(cities);

// Accessing every item
const birds = ["Parrot", "Falcon", "Owl"];
for (const bird of birds) {
   console.log(bird);
};

// Accessing all using Map();
function double(number) {
   return number * 2;
}

const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled);


// Converting between strings and arrays
const data = "Manchester,London,Liverpool,Birminham,Leeds,Carlisle";
const club = data.split(",");