$(document).ready()
//variable - starting point count down number
var startNumber = 30;
// variable - holds the time after which we subtract 1 from the startNumber. In our case 1 second
var intervalId = 0;
//variable - results
var win = 0;
var lose = 0;
//variable - question 1.
var q1 = {
  q: "What is q1?",
  a1: "<input type='radio' name='gender1' id='Correct' value='Q1Male'>  Q1Male  ",
  a2: "<input type='radio' name='gender1' id='Q1Female' value='Q1female'>  Q1Female  ",
  a3: "<input type='radio' name='gender1' id='Q1Other' value='Q1other'>  Q1Other  "
};
//variable - question 2.
var q2 = {
  q: "What is q2?",
  a1: "<input type='radio' name='gender2' id='Q2Male' value='Q2male'>  Q2Male  ",
  a2: "<input type='radio' name='gender2' id='Correct' value='Q2Female'>  Q2Female  ",
  a3: "<input type='radio' name='gender2' id='Q2Other' value='Q2other'>  Q2Other  "
};
//variable - question 3.
var q3 = {
  q: "What is q3?",
  a1: "<input type='radio' name='gender3' id='Q3Male' value='Q3male'>  Q3Male  ",
  a2: "<input type='radio' name='gender3' id='Q3female' value='Q3female'>  Q3Female  ",
  a3: "<input type='radio' name='gender3' id='Correct' value='Q3Other'>  Q3Other  "
};
//variable - question 4.
var q4 = {
  q: "What is q4?",
  a1: "<input type='radio' name='gender4' id='Correct' value='Q4Male'>  Q4Male  ",
  a2: "<input type='radio' name='gender4' id='Q4female' value='Q4female'>  Q4Female  ",
  a3: "<input type='radio' name='gender4' id='Q4Other' value='Q4other'>  Q4Other  "
};
//variable - Array to hold questions
var questions = [q1,q2,q3,q4];
//Action - when user clicks the stop button the "stop" function is executed.
$("#stop").on("click", stop);
//function - execute the start function which that sets the intervalId to 1 second and excutes the subtract function every 1 second.
function start (){
  intervalId = setInterval(subtract, 1000);
};
//function - stop the interval count down, and redirects user to result page.
function stop() {
  clearInterval(intervalId);
  var x = document.getElementById('Correct').checked;
  if (x === true){
    win++;
  }else if (x === false){
    lose++;
  };
  window.location.replace("result.html");
};
//function - subtract 1 from the startNumber, post result to html, and when the start number is = 0 redirects user to result page.
function subtract(){
    startNumber--;
    if (startNumber === 0){
    stop();
    window.location.replace("result.html");
    }
    $("#displayNumber").html("<h2>" + startNumber + "</h2>");
};
//function - variable set "i" to a random number between 0 and 4, "i" will then be used to select a question from the question array and display within html.
function getRandom(){
  var i = Math.floor((Math.random() * 4) + 0);
  $(".questionArea").append("<div>"+questions[i].q+"</div>");
  $(".questionArea").append(questions[i].a1);
  $(".questionArea").append(questions[i].a2);
  $(".questionArea").append(questions[i].a3);
};
//function - execute the start function
start();
getRandom();
