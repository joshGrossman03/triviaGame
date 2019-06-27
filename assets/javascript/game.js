
var question1;
var question2;
var question3;
var question4;
var question5;
var question6;
var question7;
var question8;
var question9;
var question10;
var intervalId;
var questionsArray = [];
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var themeSong = new Audio('./assets/audio/gotThemeSong.mp3');
var slideCounter = 0;
var slidesArray = [];
var showSlide;
var showTimer;
var timeLeft = 10;
var answer = "";
var cAns= "";


//functions


function slides() {


  question1 = new triviaQuestions("What is the surname given to bastards born in Dorne?", "Waters", "Rivers", "Sand", "Stone", "./assets/images/dorne.jpeg", "Sand", "question1");
  question2 = new triviaQuestions("'The Mountain' is the nickname for which character?", "Sandor Clegane", "Gregor Clegane", "Oberyn Martell", "Gerold Clegane", "./assets/images/gregor.jpg", "Gregor Clegane", "question2");
  question3 = new triviaQuestions("Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?", "Ser Barristan Selmy", "Ser Jaime Lannister", "Ser Jeor Mormont", "Ser Loras Tyrell", "./assets/images/serSelmy.jpg", "Ser Barristan Selmy", "question3");
  question4 = new triviaQuestions("Who was Margaery Tyrell's first husband?", "Tommen Baratheon", "Stannis Baratheon", "Joffery Baratheon", "Renley Baratheon", "./asstes/images/Renley-Baratheon.jpg", "Renley Baratheon", "question4");
  question5 = new triviaQuestions("Who is known as 'The-King-Beyond-the-Wall'?", "The Night King", "Mance Rayder", "Tormund Giantsbane", "Stannis Baratehon", "./assets/images/mance.jpeg", "Mance Rayder", "question5");
  question6 = new triviaQuestions("How many times has Sansa Stark been married?", "Thrice", "Once", "Twice", "None", "./asstes/images/sansa.png", "Twice", "question6");
  question7 = new triviaQuestions("Who is the ruler of the Iron Islands at the beginning of Game of Thrones?", "Yara Greyjoy", "Baylon Greyjoy", "Euron Greyjoy", "Theon Greyjoy", "./assets/images/Baylon_Greyjoy.jpg", "Baylon Greyjoy", "question7");
  question8 = new triviaQuestions("Who was the Mad King's firstborn son?", "Aegon Targaryen", "Aemon Targaryen", "Viserys Targaryen", "Rhaegar Targaryen", ".assets/images/rhaegar.png", "Rhaegar Targaryen", "question8");
  question9 = new triviaQuestions("Who delivered the fatal blow to the King-in-the North, Robb Stark?", "Roose Bolton", "Ramsay Bolton", "Alliser Thorne", "Walder Frey", "./assets/images/roose.jpg", "Roose Bolton", "question9");
  question10 = new triviaQuestions("Which city does Samwell Tarly travel to in order to train as a maester?", "Highgarden", "Dorne", "Oldtown", "Kingslanding", ".assets/images/samwell.jpg", "Oldtown", "question10");
  questionsArray.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);


  for (var i = 0; i < 10; i++) {


    var gameSlide = $("<div align='center'>");
    $(gameSlide).attr("style", "color:#ccc");
    $(gameSlide).addClass(questionsArray[i].divClass);
    var questionSection = $("<p class='questionHeader' style='background-color:black'>").text(questionsArray[i].triviaQuestion);
    $(gameSlide).append(questionSection);
    var ansBut1 = $("<button class='answerButton btn btn-dark'type='button'>").text(questionsArray[i].answer1);
    $(ansBut1).attr("data-answer", questionsArray[i].answer1);
    $(ansBut1).attr("data-correctanswer", questionsArray[i].correctAnswer);
    var ansBut2 = $("<button class='answerButton btn btn-dark'type='button'>").text(questionsArray[i].answer2);
    $(ansBut2).attr("data-answer", questionsArray[i].answer2);
    $(ansBut2).attr("data-correctanswer", questionsArray[i].correctAnswer);
    var ansBut3 = $("<button class='answerButton btn btn-dark'type='button'>").text(questionsArray[i].answer3);
    $(ansBut3).attr("data-answer", questionsArray[i].answer3);
    $(ansBut3).attr("data-correctanswer", questionsArray[i].correctAnswer);
    var ansBut4 = $("<button class='answerButton btn btn-dark'type='button'>").text(questionsArray[i].answer4);
    $(ansBut4).attr("data-answer", questionsArray[i].answer4);
    $(ansBut4).attr("data-correctanswer", questionsArray[i].correctAnswer);
    $(gameSlide).append(ansBut1, ansBut2, ansBut3, ansBut4);
    slidesArray.push(gameSlide);

  }
}

//constrctor function
function triviaQuestions(triviaQuestion, answer1, answer2, answer3, answer4, pic, correctAnswer, divClass) {
  this.triviaQuestion = triviaQuestion;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.pic = pic;
  this.correctAnswer = correctAnswer;
  this.divClass = divClass;
}

//on click event to start game
$(".strBut").click(function () {
  $(".startButton").hide();
  $(".mainGame").show();
  slides();
  themeSong.play();
  $(".questionBlock").html(slidesArray[slideCounter]);
  startTimer();
  startSlideshow();
});



$(document.body).on('click', '.answerButton' ,function(){
 // $("#correctAnswers").html("<p> You pressed a button! </p>");
  //$("#correctAnswers").append($(this).attr("data-correctanswer"));
  answer = $(this).attr("data-answer");
  cAns = $(this).attr("data-correctanswer");
  gameScore(answer,cAns);
  console.log(answer);
  console.log(cAns);
  
});


  
function gameScore(answer,cAns){

  if(answer === cAns){
    
    correctAnswers++;
    $("#correctAnswers").html("You have answered "+correctAnswers+" correctly.");
    stopTimer();
    stopSlideshow();
    timeLeft = 10;
    slideCounter++;
    startTimer();
    slideTransition();
    startSlideshow();
    console.log(slideCounter);
   
  }
  else{
    wrongAnswers++;
  $("#wrongAnswers").html("You have answered "+wrongAnswers+" incorrectly.");
  stopTimer();
  stopSlideshow();
  timeLeft = 10;
  slideCounter++;
  startTimer();
  slideTransition();
  startSlideshow();

  console.log(slideCounter);
 
  }
  

}
  //$("#wrongAnswers").css("{background-color:black; color:white;}");
  //var sldAns =  $(this).attr("data-answer");
  //var cAns = $(this).attr("data-correctanswer");
 // if(sldAns = cAns){
  //  correctAnswers++;
 //   $("#correctAnswers").text("Correct Answers: "+ correctAnswers);
  //}
  //else {
  //  wrongAnswers++;
 //   $("#wrongAnswers").text("Wrong Answers: "+ correctAnswers);
 // }
//});

/*function slideShow() {
 var timeleft = 15;
  $("#countdown").html(timeleft);
  $(".questionBlock").html(slidesArray[slideCounter]);
 
  setInterval(slideShow,15000)
  slideCounter++;
  timeleft--;
  console.log(slideCounter);

  if (slideCounter >= slidesArray.length) {
    slideCounter = 0;
  }
}*/

function slideTransition() {
  //slideCounter++;
  $(".questionBlock").html(slidesArray[slideCounter]);

 

  if (slideCounter === slidesArray.length) {
    slideCounter = 0;
  }
}
var timerIterations = 150;
function slideTimer() {

  $("#countdown").html("Time Remaing to Log Answer:" + timeLeft + " seconds.");
  timeLeft--;
  timerIterations--;
  if (timeLeft === -1) {
    slideCounter++;
    timeLeft = 10;
  }
  //if (timerIterations === 0) {
   // stopTimer();
  //}
}

function displaySlide() {
  $(".questionBlock").html(slidesArray[slideCounter]);
}

function startTimer() {
  showTimer = setInterval(slideTimer, 1000);
}

function startSlideshow() {
  showSlide = setInterval(slideTransition, 11000);

}
function stopSlideshow() {
  clearInterval(showSlide);
}

function stopTimer() {
  clearInterval(showTimer);
}



/*var timeleft = 15;
function slideTimer() {
  var interval = setInterval(function () {
    $("#countdown").html(timeleft);
    timeleft--;
    if (timeleft <= 0) {
      clearInterval(interval);
      //timeleft=15;
    }
  }, 1000);
}*/

/*// TODO: Put links to our images in this image array.
var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.
displayImage();*/