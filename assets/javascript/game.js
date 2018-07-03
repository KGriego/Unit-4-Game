
var userTotal = [];
var totalWins = 0;
var totalLosses = 0;

function rNumberChoice() {
    var random = Math.floor(Math.random() * 999) + 1;
    return random;
}

function rChocolateCookieNumberChoice() {
    var random = Math.floor(Math.random() * 50) + 1;
    return random;
}

function rSweetCookieChoice() {
    var random = Math.floor(Math.random() * 50) + 1;
    return random;
}

function rOreoCookieNumberChoice() {
    var random = Math.floor(Math.random() * 50) + 1;
    return random;
}

function rCookieMonsterChoice() {
    var random = Math.floor(Math.random() * 50) + 1;
    return random;
}

function randomNumberGenerated() {
    $("#totalScore").html(rChclteCookieNumberChoice);
    console.log(rChclteCookieNumberChoice);
}

var userTotalValue;
var rNumber = rNumberChoice();
var rChclteCookieNumberChoice = rChocolateCookieNumberChoice();
var rCookieMnstrChoice = rCookieMonsterChoice();
var rSwtCookieChoice = rSweetCookieChoice();
var rOreoCookieChoice = rOreoCookieNumberChoice();

$(document).ready(function () {
    // Random start number is printed to the id of randomStartNumber
    $("#randomStartNumber").html("Target Number: " + rNumber);
    console.log(rNumber);

    //this assigns a value to the images
    $("#chocoCookie").on("click", function () {
        userTotal.push(rChclteCookieNumberChoice);
        userTotalValue = userTotal.reduce((a, b) => a + b, 0);
        $("#totalScore").html("My Score: " + userTotalValue);
    })
    $("#swtCookie").on("click", function () {
        userTotal.push(rSwtCookieChoice);
        userTotalValue = userTotal.reduce((a, b) => a + b, 0);
        $("#totalScore").html("My Score: " + userTotalValue);
    })
    $("#oreoCookie").on("click", function () {
        userTotal.push(rOreoCookieChoice);
        userTotalValue = userTotal.reduce((a, b) => a + b, 0);
        $("#totalScore").html("My Score: " + userTotalValue);
    })
    $("#CookieMnstr").on("click", function () {
        userTotal.push(rCookieMnstrChoice);
        userTotalValue = userTotal.reduce((a, b) => a + b, 0);
        $("#totalScore").html("My Score: " + userTotalValue);
    })

    // This determines if the user has won or lost the game
    $(".img").on("click", function(){
        console.log("rNumber: " + rNumber);
        console.log("userTotalValue" + userTotalValue)
        if (userTotalValue === rNumber) {
            totalWins++;
            $("#totalWins").html("Wins: " + totalWins);
            rNumber = rNumberChoice();
            $("#randomStartNumber").html("Target Number: " + rNumber);
            userTotal = [];
            console.log(rNumber);
            console.log(totalWins);
        } else if (userTotalValue > rNumber) {
            totalLosses++;
            $("#totalLosses").html("Losses: " + totalLosses);
            rNumber = rNumberChoice();
            $("#randomStartNumber").html("Target Number: " + rNumber);
            userTotal = [];
            console.log(rNumber);
            console.log(totalLosses);
        }
    })  
});