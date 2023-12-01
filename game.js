
// $("h1").text("hi");


const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];


const nextSequence = () => {

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


nextSequence();


