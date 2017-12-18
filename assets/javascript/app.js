/////////////////--Variables--/////////////////
var Title = "<h1>Trivial Trivia Game!</h1>"
var BeginButton = "<button class='btn btn-primary btn-lg' id='BeginButton' role='button'>Begin Trivia Game!</button>"
var BeginNewButton = "<button class='btn btn-primary btn-lg' id='BeginNewButton' role='button'>Begin New Trivia Game!</button>"
var SubmitAnswer = "<button class='btn btn-primary btn-lg' id='SubmitAnswer' role='button'>Submit Answer</button>"
var StartNumber = 20;
var IntervalId = 0;
var win = 0;
var lose = 0;
var q1 = {
  q: "What is q1?",
  a1: "<input type='radio' name='gender1' id='Correct' value='Q1Male'>  Q1Male  ",
  a2: "<input type='radio' name='gender1' id='Q1Female' value='Q1female'>  Q1Female  ",
  a3: "<input type='radio' name='gender1' id='Q1Other' value='Q1other'>  Q1Other  "
};
var q2 = {
  q: "What is q2?",
  a1: "<input type='radio' name='gender2' id='Q2Male' value='Q2male'>  Q2Male  ",
  a2: "<input type='radio' name='gender2' id='Correct' value='Q2Female'>  Q2Female  ",
  a3: "<input type='radio' name='gender2' id='Q2Other' value='Q2other'>  Q2Other  "
};
var q3 = {
  q: "What is q3?",
  a1: "<input type='radio' name='gender3' id='Q3Male' value='Q3male'>  Q3Male  ",
  a2: "<input type='radio' name='gender3' id='Q3female' value='Q3female'>  Q3Female  ",
  a3: "<input type='radio' name='gender3' id='Correct' value='Q3Other'>  Q3Other  "
};
var q4 = {
  q: "What is q4?",
  a1: "<input type='radio' name='gender4' id='Correct' value='Q4Male'>  Q4Male  ",
  a2: "<input type='radio' name='gender4' id='Q4female' value='Q4female'>  Q4Female  ",
  a3: "<input type='radio' name='gender4' id='Q4Other' value='Q4other'>  Q4Other  "
};
var questions = [q1,q2,q3,q4];

/////////////////--Function--/////////////////
function start(){
  $("#jumbotron").html("<div class='row'><div class='col-8'>"+Title+"</div><div class='col-4' id='col-4'></div></div><hr>");
  $("#jumbotron").append("<div class='row'><div class='col-12' id='col-12'>"+BeginButton+"</div></div>");
  $("#BeginButton").on("click", game);
};
function game(){
  IntervalId = setInterval(subtract, 1000);
  getRandom();
};
function subtract(){
  StartNumber--;
  if (StartNumber === 0){
  stop();
  $("#jumbotron").html("<div class='row'><div class='col-12'>"+Title+"</div><hr><div class='col-12'>You have answered "+win+" questions correctly!</div><div class='col-12'>You have answered "+lose+" questions incorrectly!</div><div class='col-12' id='col-12'>"+BeginNewButton+"</div></div>");
  $("#BeginNewButton").on("click", reStart);
  }
  $("#col-4").html(StartNumber);
};
function getRandom(){
  var i = Math.floor((Math.random() * 4) + 0);
  $("#col-12").html("<div class='question'>"+questions[i].q+"</div><div class='answer'>"+questions[i].a1+questions[i].a2+questions[i].a3+"</div><div class='submitanswer'>"+SubmitAnswer+"</div>");
  $("#SubmitAnswer").on("click", stop);
};
function stop() {
  clearInterval(IntervalId);
  var x = document.getElementById('Correct').checked;
  if (x === true){
    win++;
      if (StartNumber > 0){
        game();
      } else {
        $("#jumbotron").html("<div class='row'><div class='col-12'>"+Title+"</div><hr><div class='col-12'>You have answered "+win+" questions correctly!</div><div class='col-12'>You have answered "+lose+" questions incorrectly!</div><div class='col-12' id='col-12'>"+BeginNewButton+"</div></div>");
        $("#BeginNewButton").on("click", reStart);
      }
  }else if (x === false){
    lose++;
      if (StartNumber > 0){
        game();
      } else {
        $("#jumbotron").html("<div class='row'><div class='col-12'>"+Title+"</div><hr><div class='col-12'>You have answered "+win+" questions correctly!</div><div class='col-12'>You have answered "+lose+" questions incorrectly!</div><div class='col-12' id='col-12'>"+BeginNewButton+"</div></div>");
        $("#BeginNewButton").on("click", reStart);
      }
  };
};
function reStart() {
  StartNumber = 10;
  win = 0;
  lose = 0;
  start();
};

/////////////////--Function-Execution-/////////////////
start();
