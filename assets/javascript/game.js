  var number = 16;
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
  var correctAnswers;
  var wrongAnswers;
  var unAnswered;
  var themeSong = new Audio('./assets/audio/gotThemeSong.mp3');

 


    

    function gamePlay(){
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        
          }
        function decrement() {  
          number--;
          $("#countdown").html("Time Remaining: "+ number);
          $("#countdown").attr("align","center");
          
          if (number === 0) {
            stop();
          }
        }
       
        function stop() {
          clearInterval(intervalId);
        }
        
        run();
    $(".mainGame").show();

      question1 = new triviaQuestions("What is the surname given to bastards born in Dorne?","Waters","Rivers","Sand","Stone","./assets/images/dorne.jpeg","Sand","question1");
      question2 = new triviaQuestions("'The Mountain' is the nickname for which character?", "Sandor Clegane","Gregor Clegane","Oberyn Martell","Gerold Clegane","./assets/images/gregor.jpg","Gregor Clegane","question2");
      question3 = new triviaQuestions("Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?","Ser Barristan Selmy", "Ser Jaime Lannister", "Ser Jeor Mormont","Ser Loras Tyrell","./assets/images/serSelmy.jpg","Ser Barristan Selmy","question3" );
      question4 = new triviaQuestions("Who was Margaery Tyrell's first husband?", "Tommen Baratheon", "Stannis Baratheon","Joffery Baratheon","Renley Baratheon","./asstes/images/Renley-Baratheon.jpg","Renley Baratheon","question4");
      question5 = new triviaQuestions("Who is known as 'The-King-Beyond-the-Wall'?","The Night King","Mance Rayder","Tormund Giantsbane","Stannis Baratehon","./assets/images/mance.jpeg","Mance Rayder","question5");
      question6 = new triviaQuestions("How many times has Sansa Stark been married?","Thrice","Once","Twice","None","./asstes/images/sansa.png","Twice","question6");
      question7 = new triviaQuestions("Who is the ruler of the Iron Islands at the beginning of Game of Thrones?","Yara Greyjoy", "Baylon Greyjoy","Euron Greyjoy","Theon Greyjoy","./assets/images/Baylon_Greyjoy.jpg", "Baylon Greyjoy","question7");
      question8 = new triviaQuestions("Who was the Mad King's firstborn son?","Aegon Targaryen","Aemon Targaryen","Viserys Targaryen","Rhaegar Targaryen",".assets/images/rhaegar.png","Rhaegar Targaryen","question8");
      question9 = new triviaQuestions("Who delivered the fatal blow to the King-in-the North, Robb Stark?","Roose Bolton", "Ramsay Bolton","Alliser Thorne","Walder Frey","./assets/images/roose.jpg", "Roose Bolton","question9");
      question10 = new triviaQuestions("Which city does Samwell Tarly travel to in order to train as a maester?","Highgarden","Dorne", "Oldtown", "Kingslanding",".assets/images/samwell.jpg", "Oldtown","question10" );
      questionsArray.push(question1,question2,question3,question4,question5,question6,question7,question8,question9,question10);

      for(var i = 9; i < questionsArray.length;i++){

        var gameSlide = $("<h1 align='center'>").text(questionsArray[i].triviaQuestion);
        $(gameSlide).attr("style","color:#ccc");
        $(".questionBlock").append(gameSlide);
        $(".questionBlock").attr("style","background-color:black");

        var ansBut1 = $("<button class='answerButton btn btn-dark'type='button'>").text(questionsArray[i].answer1);
        $(ansBut1).attr("data-answer",questionsArray[i].answer1);
        var ansBut2 = $("<button class='answerButton btn btn-dark'type='button'>").text(questionsArray[i].answer2);
        $(ansBut2).attr("data-answer",questionsArray[i].answer2);
        var ansBut3 = $("<button class='answerButton btn btn-dark'type='button'>").text(questionsArray[i].answer3);
        $(ansBut3).attr("data-answer",questionsArray[i].answer3);
        var ansBut4 = $("<button class='answerButton btn btn-dark'type='button'>").text(questionsArray[i].answer4);
        $(ansBut4).attr("data-answer",questionsArray[i].answer4);
        $("#answerBlock").append(ansBut1,ansBut2,ansBut3,ansBut4);

      // $(".answerButton").on("click",function(){
           // if($(".answerButton").data("data-answer") === questionsArray[i].correctAnswer){
       //      $(".answerButton").addClass("correct");
          //  }
       // });
    }
}
   $(".strBut").click(function(){
       $(".startButton").hide();
        themeSong.play();
        gamePlay();
   })
    

    
    

    //constrctor function
    function triviaQuestions(triviaQuestion,answer1,answer2,answer3,answer4,pic, correctAnswer, divClass) {
        this.triviaQuestion = triviaQuestion;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.pic= pic;
        this.correctAnswer = correctAnswer;
        this.divClass = divClass;
    }