//target start button
const startButton = document.getElementById("start-btn");
//target banner section
const banner = document.getElementById("banner");

//function to render question
const renderQuestion = () => {
  console.log("render question");
};
//function to banner section
const removeBanner = () => {
  console.log("remove banner");
};

//declare the event handler function for start button click
const onStartButtonClick = () => {
  console.log("start button clicked");

  //remove banner section
  removeBanner();

  //render the question
  renderQuestion();
};
// add event listener to start button

startButton.addEventListener("click", onStartButtonClick);
