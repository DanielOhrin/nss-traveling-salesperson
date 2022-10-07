// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [130, 50, 29, 92, 47]

// Declare a variable to store the total. Initial value is 0.
let weeklyTotal = 0;
for (let miles of weeklyMiles) {
    weeklyTotal += miles;
}

// Declare a new variable to store the average miles over time
let averageMiles = 0;
for (const miles of weeklyMiles) {
    averageMiles += miles;
    if (weeklyMiles.indexOf(miles) === weeklyMiles.length - 1) {
        averageMiles /= weeklyMiles.length;
    }
}
// Output the average miles and the total miles to the console
console.log(`I average ${averageMiles} miles each week.`, `I have driven a total of ${weeklyTotal} miles.`)