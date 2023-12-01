
// $("h1").text("hi");


const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];


const nextSequence = () => {

    let randomNumber = Math.floor(Math.random() * 4);

    gamePattern.push(buttonColors[randomNumber]);
    console.log(gamePattern);


}

nextSequence();