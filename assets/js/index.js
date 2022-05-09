//target start button
const startButton = document.getElementById("start-btn");

// target main section
const main = document.getElementById("main");
const timerSpan = document.getElementById("time-span");

// current question index
let questionIndex = 0;

//current score index
let scoreIndex = 0;

//define time for quiz
let timeCountdown = 60;

//all questions array
const questions = [
  {
    text: "who has the highest amount of goals in a premier league season?: ",
    options: ["Mohammed Salah", "Alan Shearer", "Cristiano Ronaldo", "Suarez"],
    answer: "Mohammed Salah",
  },
  {
    text: "which club has the highest amount of premier league titles? ",
    options: [
      " Derby County",
      "Liverpool",
      "Manchester City",
      "Manchester United",
    ],
    answer: "Manchester United",
  },
  {
    text: "Who has the most assist in a premier league season: ",
    options: ["Kevin de Britney", "Thierry Henry", "Ryan Giggs", "Mesut özil"],
    answer: "Thierry Henry",
  },
  {
    text: "How many premier league titles have Manchester city won? ",
    options: ["5", "8", "2", "11"],
    answer: "5",
  },
  {
    text: "which club has won premier league with no losses? ",
    options: ["chelsea", "leicester", "Arsenal", "Manchester City"],
    answer: "Arsenal",
  },
  {
    text: "How many managers have lost their jobs in the 2019/20 Premier League season?",
    options: ["7", "1", "4", "6"],
    answer: "6",
  },
  {
    text: "Who got more assists? ",
    options: ["Wayne Rooney", "Frank Lampard", "Matic", "Nicolas Anelka"],
    answer: "Wayne Rooney",
  },
  {
    text: "Which player has scored the most free-kicks? ",
    options: ["David Beckham", "Ronaldo", "Messi", "Drogba"],
    answer: "David Beckham",
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
  const tableArr = JSON.parse(localStorage.getItem("feedbackResults"));
  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "content-section");
  section.setAttribute("id", "results-container");
  // create h1
  const title = document.createElement("h2");
  title.setAttribute("class", "content-section-title");
  title.textContent = "results";
  //create scoreboard
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-info");
  h2.textContent = "your score was: " + scoreIndex + "/" + questions.length;
  //create scoreboard
  const timer = document.createElement("h2");
  timer.setAttribute("class", "content-section-info");
  timer.textContent = "time remaining: " + timeCountdown + " seconds";
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
  section.append(title, h2, timer, div);
  main.append(section);
};
//function to render form
const renderForm = () => {
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

// function to render timer
const renderTimerSection = () => {
  // use HTML as guide and build in JS
  const timerSection = document.createElement("section");
  timerSection.setAttribute("class", "timer-section");
  timerSection.setAttribute("id", "timer");
  const timeRemaining = document.createElement("div");
  timeRemaining.setAttribute("class", "timer");
  const timeSpan = document.createElement("span");
  timeSpan.setAttribute("id", "time-span");
  timeSpan.setAttribute("class", "time-span-class");

  //append span to time remaining then time remaining to section
  timeRemaining.appendChild(timeSpan);
  timerSection.append(timeRemaining);
  main.append(timerSection);

  // function for timer countdown
  const timerCountdownUpdate = () => {
    //reduce time
    timeCountdown -= 1;
    timeSpan.textContent = `Time Remaining: ${timeCountdown} seconds`;
    if (timeCountdown === 0) {
      clearInterval(timerId);
    }
  };
  const timerId = setInterval(timerCountdownUpdate, 1000);
};

//function to banner section
const removeBanner = () => {
  banner.remove();
};
// function to remover question section
const removeQuestion = () => {
  document.getElementById("question-container").remove();
};
// function to remover timer section
const removeTimerSection = () => {
  document.getElementById("timer").remove();
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
  // get target
  const target = event.target;
  //check if click originates from li
  // check if target element is li element
  if (target.tagName === "LI") {
    //get the option the user clicked on
    const value = target.getAttribute("data-value");
    //get the question the user answered
    const question = questions[questionIndex].text;
    //get the right answer to the question the user answered
    const correctValue = questions[questionIndex].answer;

    if (value == correctValue) {
      //add to score by 1
      scoreIndex += 1;
      // add 5 seconds from timer
      timeCountdown += 2;
    } else {
      //alert incorrect answer
      alert("incorrect answer");
      //remove 5 seconds from timer
      timeCountdown -= 5;
    }
    //build an answer object that contains question and answer
    const answer = {
      question,
      value,
    };

    // store answer in local storage
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
      const finalTime = timeCountdown;
      removeTimerSection();
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
  const score = scoreIndex + "/" + questions.length;
  const finalTime = timeCountdown + " seconds";
  //validate
  if (fullName) {
    // build object with full name and results
    const results = {
      fullName,
      score,
      finalTime,
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
  //initialise feedback results
  initialiseLocalStorage();
  // render the timer
  renderTimerSection();
  //remove banner section
  removeBanner();

  //render the question
  renderQuestion();
};

// add event listener to next button
window.addEventListener("load", handleLoad);
