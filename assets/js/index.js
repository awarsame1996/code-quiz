//target start button
const startButton = document.getElementById("start-btn");
//target banner section
const banner = document.getElementById("banner");

// target main section
const main = document.getElementById("main");

//function to render question
const renderQuestion = () => {
  console.log("render question");
  // create section
  const section = document.createElement("section");
  section.setAttribute("class", "content-section question-section");
  // creat h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  //TODO: should render specific to the question (dynamic)
  h2.textContent = "question x: something will go here";
  // creat ul and append 4 li
  const ul = document.createElement("ul");
  ul.setAttribute("class", "feedback-list");

  // call function to create and append list items to ul****
  const li1 = document.createElement("li");
  li1.setAttribute("class", "list-item");
  li1.textContent = "answer 1";
  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-item");
  li2.textContent = "answer 2";
  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-item");
  li3.textContent = "answer 3";
  ul.append(li1, li2, li3);
  // create div and append button
  const div = document.createElement("div");
  div.setAttribute("class", "btn-control");

  // create button
  const button = document.createElement("button");
  button.setAttribute("class", "btn");
  button.setAttribute("id", "next-btn");
  button.textContent = "Next";
  div.append(button);

  //append h2, ul and div to section
  section.append(h2, ul, button);

  // append question section to main element
  main.append(section);
};
//function to banner section
const removeBanner = () => {
  console.log("remove banner");
  banner.remove();
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
