//target start button
const startButton = document.getElementById("start-btn");
//target banner section
const banner = document.getElementById("banner");

//declare the event handler function for start button click
const onStartButtonClick = () => {
  console.log("start button clicked");
};
// add event listener to start button

startButton.addEventListener("click", onStartButtonClick);
