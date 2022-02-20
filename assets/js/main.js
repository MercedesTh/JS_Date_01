console.log("%cDate Lev1_1", "color: aqua");

let date1 = new Date();
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);

let out = document.getElementById("output");

out.innerHTML += `${date1} <br><br>`
out.innerHTML += `${date2} <br><br>`
out.innerHTML += `${date3} <br><br>`
out.innerHTML += `${date4} <br><br><br><br><br>`



console.log("%cDate Lev1_2", "color: aqua");

// A
let monate = [
    "Januar",
    "Febuary",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Friday",
    "Samstag"
];

out.innerHTML += `${new Date()} <br><br>`
out.innerHTML += `${new Date().getFullYear()} <br><br>`
out.innerHTML += `${new Date().getMonth()} Month <br><br>`
out.innerHTML += `${new Date().getDate()} Days <br><br>`
out.innerHTML += `${new Date().getHours()} Hours <br><br>`
out.innerHTML += `${new Date().getMinutes()} Minutes <br><br>`
out.innerHTML += `${wochenTag[5]} <br><br>`
out.innerHTML += `${monate[1]} <br><br><br><br>`




console.log("%cDate Lev1_6", "color: aqua");


let date5 = new Date(1999, 10, 5, 15); // PM
let date6 = new Date();
let date7 = new Date(2019, 12, 3, 12); // AM
let date8 = new Date(2000, 1, 1, 11); // AM

function AMtoPM(x) {
    console.log('test1');
    if (x <= 12) {
        console.log('AM');
    } else if (x >= 0) {
        console.log('PM');
    }
}
AMtoPM(date8.getHours());




console.log("%cDate Lev1_7", "color: aqua");

let weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Sunday',
    'Sunday',
    'Sunday',
    'Sunday',
]

function isWeekend(y) {
    console.log('test2');
    let z = new Date(y)
    if (z.getDay() == 0 || z.getDay() == 6) {
        return 'Weekend'
    }
    return 'Working Day'
}
console.log(isWeekend("12, 15, 2019"));
console.log(isWeekend("2, 16, 2001"));
console.log(isWeekend("2, 1, 2020"));
console.log(isWeekend("2, 29, 2020"));



console.log("%cDate Lev1_8", "color: aqua");

//Zeit zeigen
// setInterval(function () {
//     var date = new Date();
//     var zeit = date.toLocaleTimeString();
//     console.log(zeit);
// }, 1000);

// setInterval()
// var i = 10;
// clearInterval()
// Conditional Statements
// interval(Zeit)

// STEFF:

let count = document.getElementById('countdown');

let timeleft = 10; // The countdown max you're setting
let timer = setInterval(function () { //variable timer needed for clearInterval
    if (timeleft < 0) {
        clearInterval(timer); //stops the function/loop
        count.innerHTML = `<h3>Countdown finished</h3>`
    } else {
        console.log(timeleft);
        count.innerHTML = `<h3>${timeleft} seconds</h3>`
    }
    timeleft -= 1; //important to reduce timeleft by one(1) since setInterval acts like a loop
}, 1000); // 1000 -> 1 second interval



console.log("%cDate Lev1_9", "color: aqua");








