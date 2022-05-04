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
//initialise local storage
const initialiseLocalStorage = () => {
  //get feedbackResults from LS
  const feedbackResultsFromLS = JSON.parse(
    localStorage.getItem("feedbackResults")
  );
  console.log(feedbackResultsFromLS);
  localStorage.setItem("feedbackResults", JSON.stringify([]));
};
// function to store answer in local storage
const storeAnswerInLS = (answer) => {
  //get feedbackResults from LS
  const feedbackResults = JSON.parse(localStorage.getItem("feedbackResults"));

  //push answer in to array
  feedbackResults.push(answer);

  //set feedbackResults in LS
  localStorage.setItem("feedbackResults", JSON.stringify(feedbackResults));
};

//function to render results
const renderResults = () => {
  console.log("renderResults");
  const tableArr = JSON.parse(localStorage.getItem("feedbackResults"));
  //creat section
  const section = document.createElement("section");
  section.setAttribute("class", "content-section results-section");
  // create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  h2.textContent = "results";
  // // create div container for results
  // const div = document.createElement("div");
  // div.setAttribute("class", "results-table");
  // // create 2 uls with 8 li
  // const ul = document.createElement("ul");
  // ul.setAttribute(
  //   "class",
  //   "results-lists animate__animated animate__bounceInDown"
  // );
  // const li1 = document.createElement("li");
  // li1.setAttribute("class", "results-item");

  // li1.textContent = questions[0].text;
  // const li2 = document.createElement("li");
  // li2.setAttribute("class", "results-item");
  // li2.textContent = questions[1].text;
  // const li3 = document.createElement("li");
  // li3.setAttribute("class", "results-item");

  // li3.textContent = questions[2].text;
  // const li4 = document.createElement("li");
  // li4.setAttribute("class", "results-item");
  // li4.textContent = questions[3].text;
  // ul.append(li1, li2, li3, li4);
  // const ul1 = document.createElement("ul");
  // ul1.setAttribute(
  //   "class",
  //   "results-lists animate__animated animate__bounceInDown"
  // );
  // const li5 = document.createElement("li");
  // li5.setAttribute("class", "results-item");

  // li5.textContent = tableArr[0].value;
  // const li6 = document.createElement("li");
  // li6.setAttribute("class", "results-item");
  // li6.textContent = tableArr[1].value;
  // const li7 = document.createElement("li");
  // li7.setAttribute("class", "results-item");

  // li7.textContent = tableArr[2].value;
  // const li8 = document.createElement("li");
  // li8.setAttribute("class", "results-item");
  // li8.textContent = tableArr[3].value;
  // ul1.append(li5, li6, li7, li8);

  // div.append(ul, ul1);

  section.append(h2, div);
  main.append(section);
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
      value,
    };

    //TODO: store answer in local storage
    storeAnswerInLS(answer);
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
  //initialise feedback results
  initialiseLocalStorage();
  //remove banner section
  removeBanner();

  //render the question
  renderQuestion();
};

// add event listener to next button
startButton.addEventListener("click", onStartButtonClick);
