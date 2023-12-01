
// $("h1").text("hi");


const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];


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


nextSequence();


