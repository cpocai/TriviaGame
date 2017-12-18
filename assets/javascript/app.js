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
  q: "What is the command to create a file?",
  a1: " <input type='radio' name='gender1' id='Correct'>  touch <filename>  ",
  a2: " <input type='radio' name='gender1' id='Wrong1'>  create <filename>  ",
  a3: " <input type='radio' name='gender1' id='Wrong2'>  cp <filename>  "
};
var q2 = {
  q: "What is a command to create a folder?",
  a1: " <input type='radio' name='gender2' id='Wrong3'>  touch <filename>  ",
  a2: " <input type='radio' name='gender2' id='Correct'>  mkdir <filename>  ",
  a3: " <input type='radio' name='gender2' id='Wrong4'>  rm <filename>  "
};
var q3 = {
  q: "What is the command to move a file?",
  a1: " <input type='radio' name='gender3' id='Wrong5'>  cp <filename> <destination>  ",
  a2: " <input type='radio' name='gender3' id='Wrong6'>  ls <filename> <destination>  ",
  a3: " <input type='radio' name='gender3' id='Correct'>  mv <filename> <destination>  "
};
var q4 = {
  q: "What is the command to go up one directory?",
  a1: "<input type='radio' name='gender4' id='Correct'>  cd ..  ",
  a2: "<input type='radio' name='gender4' id='Wrong7'>  pwd  ",
  a3: "<input type='radio' name='gender4' id='Wrong8'>  ls -l  "
};
var questions = [q1,q2,q3,q4,q4,q3,q2,q1];

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
  var i = Math.floor((Math.random() * 7) + 0);
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
