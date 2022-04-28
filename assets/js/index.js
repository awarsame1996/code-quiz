//target start button
const startButton = document.getElementById("start-btn");
//target banner section
const banner = document.getElementById("banner");

// target main section
const main = document.getElementById("main");

// current question index
let questionIndex = 0;

// all options
const options = ["answer 1", "answer 2", "answer 3", "answer 4"];

//all questions array
const questions = [
  {
    text: "question: ",
    options,
  },
  {
    text: "question: ",
    options,
  },
  {
    text: "question: ",
    options,
  },
  {
    text: "question: ",
    options,
  },
  {
    text: "question: ",
    options,
  },
  {
    text: "question: ",
    options,
  },
  {
    text: "question: ",
    options,
  },
  {
    text: "question: ",
    options,
  },
];
//function to banner section
const removeBanner = () => {
  console.log("remove banner");
  banner.remove();
};
// function to remover question section
const removeQuestion = () => {
  console.log("remove question");
  document.getElementById("question-container").remove();
};
/*declare the event handler function for next button click
const onNextButtonClick = () => {
  console.log("next button clicked");
};*/
// event handler function to handle click events in question section
const handleOptionClick = (event) => {
  console.log("clicked somewhere in question section");
  //get current target
  const currentTarget = event.currentTarget;
  // get target
  const target = event.target;
  //check if click originates from li
  // check if target element is li element
  if (target.tagName === "LI") {
    //get the option the user clicked on
    const value = target.getAttribute("data-value");
    console.log(value);
    //get the question the user answered
    const question = questions[questionIndex].text;
    console.log(question);
    //build an answer object that contains question and answer
    const answer = {
      question,
      value,
    };

    //TODO: store answer in local storage
    console.log(answer);
    //remove question
    removeQuestion();
    //go to next question if not the last question
    if (questionIndex < questions.length - 1) {
      //go to next question if not last question
      // increment the quest by 1
      questionIndex += 1;
      renderQuestion();
    } else {
      // if  last question then render results and form

      renderResults();
      renderForm();
    }
  }
};
//function to render results
const renderResults = () => {
  console.log("renderResults");
};
//function to render form
const renderForm = () => {
  console.log("renderForm");
};
//function to render question
const renderQuestion = () => {
  console.log("render question");
  //get current question
  const currentQuestion = questions[questionIndex];
  // create section
  const section = document.createElement("section");
  section.setAttribute("class", "content-section question-section");
  section.setAttribute("id", "question-container");
  // creat h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  // specific to the question (dynamic)
  h2.textContent = `${questionIndex + 1}. ${currentQuestion.text}`;
  // creat ul and append 4 li
  const ul = document.createElement("ul");
  ul.setAttribute("class", "feedback-list");

  // call function to create and append list items to ul****
  const li1 = document.createElement("li");
  li1.setAttribute("class", "list-item");
  li1.setAttribute("data-value", currentQuestion.options[0]);
  li1.textContent = currentQuestion.options[0];
  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-item");
  li2.setAttribute("data-value", currentQuestion.options[1]);
  li2.textContent = currentQuestion.options[1];
  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-item");
  li3.setAttribute("data-value", currentQuestion.options[2]);
  li3.textContent = currentQuestion.options[2];
  const li4 = document.createElement("li");
  li4.setAttribute("class", "list-item");
  li4.setAttribute("data-value", currentQuestion.options[3]);
  li4.textContent = currentQuestion.options[3];
  ul.append(li1, li2, li3, li4);
  // create div and append button
  const div = document.createElement("div");
  div.setAttribute("class", "btn-control");

  //append h2, ul and div to section
  section.append(h2, ul);

  // append question section to main element
  main.append(section);
  //add event listener on question section
  section.addEventListener("click", handleOptionClick);
};

//declare the event handler function for start button click
const onStartButtonClick = () => {
  console.log("start button clicked");

  //remove banner section
  removeBanner();

  //render the question
  renderQuestion();
};

// add event listener to next button
startButton.addEventListener("click", onStartButtonClick);
