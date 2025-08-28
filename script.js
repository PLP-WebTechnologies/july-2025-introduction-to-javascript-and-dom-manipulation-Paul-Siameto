

// Part 1
let isLoggedIn = true;
let username = "Paul";

// DOM Interaction #1: Display welcome message
let message = document.getElementById("w-message");
if (isLoggedIn) {
    message.textContent = "Welcome back, " + username + "!";
} else {
    message.textContent = "Please log in to continue.";
}

function validation() {
    let b = document.getElementById("name").value;
    let a = document.getElementById("age").value;
    let msg;

    if (b === "") {
        msg = "Please enter your name";
        document.getElementById("message").innerHTML = msg;
        return;
    }

    if (a >= 18 && a <= 40) {
        msg = "You are eligible for the competition";
    } else if (a < 18){
        msg = "You are too young to join the competition";
    } else if (a > 40){
        msg = "You are too old to join the competition";
    } else {
        msg = "Please enter a valid age";
    }
    document.getElementById("message").innerHTML = msg;
}


// Part 2
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Paul"));

function cars() {
    let c = document.getElementById("car").value;
    let m = document.getElementById("model").value;
    let messo;
    if (c === "" || m === "") {
        messo = "Please enter both car name and model";
        document.getElementById("text").innerHTML = messo;
        return;
    } else {
        messo = "Your car is a " + c + " and the model is " + m;
    }
    document.getElementById("text").innerHTML = messo;
}

function calc(operation) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").innerHTML = "Please enter both numbers";
        return;
    }

    switch (operation) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "/":
            result = n2 === 0 ? "Cannot divide by zero" : n1 / n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}


function generateFruitList() {
    let fruits = ["Apple", "Banana", "Cherry", "Mango"];

  // DOM Interaction #2: Add fruits dynamically
    let list = document.getElementById("fruitList");
    list.innerHTML = "";
    fruits.forEach((fruit) => {
        let li = document.createElement("li");
        li.textContent = fruit;
        list.appendChild(li);
    });
}


// Part 3
// 1. Using a for loop to simulate a countdown
console.log("Countdown using for loop:");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blast off!\n");

// 2. Using a while loop to generate dynamic content
console.log("Dynamic content using while loop:");
let num = 1;
while (num <= 5) {
    console.log("Item " + num);
    num++;
}
console.log("\n");

// 3. Using forEach loop to iterate through an array
console.log("Iterating through an array using forEach:");
let fruits = ["Apple", "Banana", "Cherry", "Mango"];
fruits.forEach((fruit, index) => {
    console.log(index + 1 + ". " + fruit);
});


// Part 4
// I've also included part 4 in some other parts of the assignment
// e.g., DOM Interaction #1 & #2, and the validation function
function startCountdown(seconds) {
    let countdownDiv = document.getElementById("countdown");
    let current = seconds;

    let timer = setInterval(() => {
    countdownDiv.textContent = current;
    current--;

        if (current < 0) {
            clearInterval(timer);
            countdownDiv.textContent = "Blast Off 🚀!";
        }
    }, 1000);
}

// DOM Events & Interactions

document.getElementById("startCountdown").addEventListener("click", function () {
    startCountdown(5);
});

// Call fruit list function when page loads
generateFruitList();



function changeColor() {
    document.getElementsByTagName("main")[0].style.backgroundColor = "lightblue";
}
