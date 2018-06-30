function startGame() {

}

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


function randomNumberGenerated (){
    $("#totalScore").html(rChclteCookieNumberChoice);
    console.log(rChclteCookieNumberChoice);
}




var rNumber = rNumberChoice();
var rChclteCookieNumberChoice = rChocolateCookieNumberChoice();
var rCookieMnstrChoice = rCookieMonsterChoice();
var rSwtCookieChoice = rSweetCookieChoice();
var rOreoCookieChoice = rOreoCookieNumberChoice();
var userTotal = [];




$(document).ready(function () {
    // Random start number is printed to the id of randomStartNumber
    $("#randomStartNumber").html(rNumber);
    console.log(rNumber);

    //this assigns a value to the images
    $("#chocoCookie").on("click", function () {
        $("#totalScore").html(rChclteCookieNumberChoice);
        userTotal.push(rChclteCookieNumberChoice);
        console.log(rChclteCookieNumberChoice);
        console.log(userTotal);
    })
    $("#swtCookie").on("click", function () {
        $("#totalScore").html(rSwtCookieChoice);
        userTotal.push(rSwtCookieChoice);
        console.log(userTotal);
        console.log(rSwtCookieChoice);
    })
    $("#oreoCookie").on("click", function () {
        $("#totalScore").html(rOreoCookieChoice);
        userTotal.push(rOreoCookieChoice);
        console.log(userTotal);
        console.log(rOreoCookieChoice);
    })
    $("#CookieMnstr").on("click", function () {
        $("#totalScore").html(rCookieMnstrChoice);
        userTotal.push(rCookieMnstrChoice);
        console.log(userTotal);
        console.log(rCookieMnstrChoice);
    })

    // This adds the total of the images together until the user either wins or loses
    if (rNumber === userTotal){
        wins++;
    }

    // this shows the user how many times they have lost and won


    // this reset the counter of wins and lose after each game has been won and lost    



});