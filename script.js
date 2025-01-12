console.log("Headline Generator Project");

let day;
let year = (Math.floor(Math.random() * 100) + 1900);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[Math.floor(Math.random() * 12)];

if (month === "February") {
    day = Math.ceil(Math.random() * 28);
} else if (month === "April" || month === "June" || month === "September" || month === "November" ) {
    day = Math.ceil(Math.random() * 30);
} else {
    day = Math.ceil(Math.random() * 31);
}

let person;
const persons = ["person", "woman", "man", "shopkeeper", "bartender", "politician", "itinerant", "garbage collector", "fortune teller"];
person = persons[Math.floor(Math.random() * persons.length)];

const subjects = ["Chinchilla", "Hyena", "Snake", "Turkey", `Local ${person}`];
let subject = subjects[Math.floor(Math.random() * subjects.length)];

let action;
let place;
let task;
let statement;

const places = [
    "Bronx zoo",
    "research facility",
    "kitchen of specialty meats restaurant",
    "garbage truck",
    "inter-dimensional prison"
];
place = places[Math.floor(Math.random() * places.length)];

const tasks = [
    "tie shoes",
    "count to ten",
    "read",
    "code in Javascript",
    "communicate emotions"
];
task = tasks[Math.floor(Math.random() * tasks.length)];

const statements = [
    "The end is near",
    "It's our time now",
    "It was a joke that went too far",
    "Now, more than ever, is the time for solidarity",
    "If you don't grant our list of demands, the President gets it"];
statement = statements[Math.floor(Math.random() * statements.length)];

const actions = [`escapes from ${place}.`, `learns to ${task}.`, `affirms "${statement}."`];
action = actions[Math.floor(Math.random() * actions.length)];

console.log(`${day} ${month}, ${year}: ${subject} ${action}`);