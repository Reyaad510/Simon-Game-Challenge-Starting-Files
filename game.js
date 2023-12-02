
// $("h1").text("hi");


const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let gameStart = false;
let level = 0;

const nextSequence = () => {

    // increase level by 1 everytime nextSequence called and update title
    level++;
    $("h1").text(`Level: ${level}`);
   
    // Random number between 0 and 3
    let randomNumber = Math.floor(Math.random() * 4);

    // Random color chosen from the buttonColors array 
    let randomChosenColor = buttonColors[randomNumber]


    animateColor(randomChosenColor);
    playSound(randomChosenColor);


    // Pushing random color to end of gamePattern array
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

}



const playSound = (sound) => {

    // Play correct sound for specific colored button
    let audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();

}


const animateColor = (color) => {

    // animate chosen color to blink
    $(`#${color}`).fadeOut(0.001).fadeIn();

}


const animatePress = (currentColor) => {

    // add class "pressed"
   $(`.btn.${currentColor}`).addClass("pressed");

    // removed class pressed to create click animation
   setTimeout(() => {
    $(`.btn.${currentColor}`).removeClass("pressed");
   }, 100)

}



// When button clicked we get id and push into userClickedPattern array

$(".btn").on("click", function(event){

    // storing id 
    let userChosenColor = event.target.id;

    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);

    playSound(userChosenColor);

})


// Use jQuery to detect when keyboard key has been pressed, when happens first time call nextSequence();

$("body").keydown(function(event){

    if(!gameStart){

        $("h1").text(`Level: ${level}`);
        nextSequence();
        gameStart = true;

    }
})








