//target start button
const startButton = document.getElementById("start-btn");

// target main section
const main = document.getElementById("main");

// current question index
let questionIndex = 0;

//all questions array
const questions = [
  {
    text: "who has the highest amount of goals in a premier league season?: ",
    options: ["Mohammed Salah", "Alan Shearer", "Cristiano Ronaldo", "Suarez"],
  },
  {
    text: "which club has the highest amount of premier league titles? ",
    options: [
      " Derby County",
      "Liverpool",
      "Manchester City",
      "Manchester United",
    ],
  },
  {
    text: "Who has the most assist in a premier league season: ",
    options: ["Kevin de Britney", "Thierry Henry", "Ryan Giggs", "mesut özil"],
  },
  {
    text: "How many premier league titles have Manchester city won? ",
    options: ["5", "8", "2", "11"],
  },
  {
    text: "which club has won premier league with no losses? ",
    options: ["chelsea", "leicester", "Arsenal", "Manchester City"],
  },
  {
    text: "question: ",
    options: ["chelsea", "leicester", "Arsenal", "Manchester City"],
  },
  {
    text: "question: ",
    options: ["chelsea", "leicester", "Arsenal", "Manchester City"],
  },
  {
    text: "question: ",
    options: ["chelsea", "leicester", "Arsenal", "Manchester City"],
  },
];
// function to render banner
const renderBanner = () => {
  const section = document.createElement("section");
  section.setAttribute(
    "class",
    " content-section animate__animated animate__bounceInDown"
  );
  section.setAttribute("id", "banner");
  const h1 = document.createElement("h1");
  h1.setAttribute("class", "content-section-title");
  h1.textContent = "welcome to the hardest premier league quiz";
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-info");
  h2.textContent = "enter at your own risk";
  const btnDiv = document.createElement("div");
  btnDiv.setAttribute(
    "class",
    "btn-control animate__animated animate__bounceInDown"
  );
  const button = document.createElement("button");
  button.setAttribute("class", "btn");
  button.setAttribute("id", "start-btn");
  button.textContent = "start";
  btnDiv.append(button);
  section.append(h1, h2, btnDiv);
  main.append(section);
  button.addEventListener("click", onStartButtonClick);
};
// function to restart
const renderRestart = () => {
  const section = document.createElement("section");
  section.setAttribute("class", " content-section");
  section.setAttribute("id", "restart-container");
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  h2.textContent = "wanna try again?";
  const button = document.createElement("a");
  button.setAttribute("class", "btn");
  button.setAttribute("href", "./index.html");
  button.textContent = "restart";
  section.append(h2, button);
  main.append(section);
};
//function to render results
const renderResults = () => {
  console.log("renderResults");
  const tableArr = JSON.parse(localStorage.getItem("feedbackResults"));
  console.log(tableArr);
  //creat section
  const section = document.createElement("section");
  section.setAttribute("class", "content-section");
  section.setAttribute("id", "results-container");
  // create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  h2.textContent = "results";
  // create div container for results
  const div = document.createElement("div");
  div.setAttribute("class", "results-section");
  // create 2 uls with 8 li
  const ul = document.createElement("ul");
  ul.setAttribute(
    "class",
    "results-list animate__animated animate__bounceInDown"
  );
  const li1 = document.createElement("li");
  li1.setAttribute("class", "results-item");

  li1.textContent =
    "question: " +
    tableArr[0].question +
    "\n" +
    "response: " +
    tableArr[0].value;
  const li2 = document.createElement("li");
  li2.setAttribute("class", "results-item");
  li2.textContent =
    "question: " +
    tableArr[1].question +
    "\n" +
    "response: " +
    tableArr[1].value;
  const li3 = document.createElement("li");
  li3.setAttribute("class", "results-item");
  li3.textContent =
    "question: " +
    tableArr[2].question +
    "\n" +
    "response: " +
    tableArr[2].value;
  const li4 = document.createElement("li");
  li4.setAttribute("class", "results-item");
  li4.textContent =
    "question: " +
    tableArr[3].question +
    "\n" +
    "response: " +
    tableArr[3].value;
  const li5 = document.createElement("li");
  li5.setAttribute("class", "results-item");
  li5.textContent =
    "question: " +
    tableArr[4].question +
    "\n" +
    "response: " +
    tableArr[4].value;
  const li6 = document.createElement("li");
  li6.setAttribute("class", "results-item");
  li6.textContent =
    "question: " +
    tableArr[5].question +
    "\n" +
    "response: " +
    tableArr[5].value;
  const li7 = document.createElement("li");
  li7.setAttribute("class", "results-item");
  li7.textContent =
    "question: " +
    tableArr[6].question +
    "\n" +
    "response: " +
    tableArr[6].value;
  const li8 = document.createElement("li");
  li8.setAttribute("class", "results-item");
  li8.textContent =
    "question: " + tableArr[7].question + "response: " + tableArr[7].value;

  ul.append(li1, li2, li3, li4, li5, li6, li7, li8);

  div.append(ul);
  section.append(h2, div);
  main.append(section);
};
//function to render form
const renderForm = () => {
  console.log("renderForm");
  const section = document.createElement("section");
  section.setAttribute("class", "form-section content-section");
  section.setAttribute("id", "form-container");
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  h2.textContent = "submit your feedback";
  const form = document.createElement("form");
  form.setAttribute("class", "form-section");

  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "form-control");
  const input = document.createElement("input");
  input.setAttribute("class", "form-input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "full-name");
  input.setAttribute("placeholder", "enter full name");

  inputDiv.append(input);
  const submitDiv = document.createElement("div");
  submitDiv.setAttribute("class", "form-control");
  const button = document.createElement("button");
  button.setAttribute("class", "btn");
  button.setAttribute("type", "submit");
  button.textContent = "submit";
  submitDiv.append(button);
  form.append(inputDiv, submitDiv);
  section.append(h2, form);
  main.append(section);

  // add event listener to form submission
  form.addEventListener("submit", handleFormSubmit);
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
  h2.setAttribute(
    "class",
    "question-section-title animate__animated animate__bounceInDown"
  );
  // specific to the question (dynamic)
  h2.textContent = `${questionIndex + 1}. ${currentQuestion.text}`;
  // creat ul and append 4 li
  const ul = document.createElement("ul");
  ul.setAttribute(
    "class",
    "feedback-list animate__animated animate__bounceInDown"
  );

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

  //append h2, ul and div to section
  section.append(h2, ul);

  // append question section to main element
  main.append(section);
  //add event listener on question section
  section.addEventListener("click", handleOptionClick);
};

//function to banner section
const removeBanner = () => {
  banner.remove();
};
// function to remover question section
const removeQuestion = () => {
  console.log("remove question");
  document.getElementById("question-container").remove();
};
// function to remover question section
const removeSubmitResults = () => {
  document.getElementById("form-container").remove();
  document.getElementById("results-container").remove();
};
//initialise local storage
const initialiseLocalStorage = () => {
  //get feedbackResults from LS
  const feedbackResultsFromLS = JSON.parse(
    localStorage.getItem("feedbackResults")
  );
  const allResultsFromLS = JSON.parse(localStorage.getItem("allResults"));
  if (!feedbackResultsFromLS) {
    localStorage.setItem("feedbackResults", JSON.stringify([]));
  }
  if (!allResultsFromLS) {
    localStorage.setItem("allResults", JSON.stringify([]));
  }
};
// function to store answer in local storage
const storeInLS = (key, value) => {
  //get feedbackResults from LS
  const arrayFromLS = JSON.parse(localStorage.getItem(key));

  //push answer in to array
  arrayFromLS.push(value);

  //set feedbackResults in LS
  localStorage.setItem(key, JSON.stringify(arrayFromLS));
};
// event handler function to handle page load up
const handleLoad = (event) => {
  renderBanner();
};
// event handler function to handle click events in question section
const handleOptionClick = (event) => {
  console.log("clicked somewhere in question section");

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
    storeInLS("feedbackResults", answer);
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
// event handler function to handle click events in form section
const handleFormSubmit = (event) => {
  event.preventDefault();
  //get full name from input
  const fullName = document.getElementById("full-name").value;

  //validate
  if (fullName) {
    // if valid then store name and score
    const feedbackResults = JSON.parse(localStorage.getItem("feedbackResults"));
    // build object with fullname and results
    const results = {
      fullName,
      feedbackResults,
    };

    // push results back to LS
    storeInLS("allResults", results);

    //clear feedbackResults
    localStorage.removeItem("feedbackResults");
    removeSubmitResults();
    renderRestart();
  } else {
    alert("please enter full name");
  }
};

//declare the event handler function for start button click
const onStartButtonClick = () => {
  console.log("start button clicked");
  //initialise feedback results
  initialiseLocalStorage();
  //remove banner section
  removeBanner();

  //render the question
  renderQuestion();
};

// add event listener to next button
window.addEventListener("load", handleLoad);
