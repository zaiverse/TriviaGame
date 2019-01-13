//declare global variables
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var currentQuestion = 0;
var counter = 16;

    function startAgain(){
        wrongAnswers = 0;
        correctAnswers = 0;
        unAnswered = 0;
        currentQuestion = 0;
        displayQuestion();
    }
//variable that stores questions, choices, and answers for the trivia
var Questions = [
        {
            question: "what is the largest sea animal",
            choices: ["blue whale", "crab", "me"],
            correctAnswer: "blue whale"
        },
        {
            question: "How deep is the ocean",
            choices: ["unknown", "10,994 meters", "sometin"],
            correctAnswer: "10,994 meters"
        }
    ]

    //reset
    function reset(){
        $('#questionDiv').empty();
        $('#timer').empty();
        $('#answerChoices').empty();

    }


    //prompt user to start game
    $('<button id = "startButton">Start</button>').appendTo('#questionDiv');
    $('#startButton').on("click", function(){
        $('#questionDiv').empty();
        displayQuestion();
    })

    //create a countdown timer (fix after you change change questions!!)
    function timer(){
        counter--;
        $('#timer').text('Time remaining: ' + counter);
        if(counter <= 0){
            timesUp();
        }  
    }

    function reset(){
        $("#questionDiv").empty();
        $('#answerChoices').empty();
        $('#timer').empty();
    }
    
    //function for question display
    function displayQuestion(){
        reset();
        
        timeup = setInterval(timer, 1000);
        $('#questionDiv').append("<h5>" + Questions[this.currentQuestion].question + "</h5>");
        for(var i=0; i< Questions[this.currentQuestion].choices.length; i++){
            $('#answerChoices').append("<div><button class='answer-button' id='button' class='choiceButton' data-name='" + Questions[this.currentQuestion].choices[i]
            + "'>" + Questions[this.currentQuestion].choices[i] + "</button></div>");
        }
    }
    
    //create function to iterate currentQuestion by one 
    function nextQuestion(){
            clearInterval(timeup);
            counter = 20;
            currentQuestion++;
            displayQuestion();
    }
    //check whether button clicked is === to correctAnswer
    function checkAnswer(event){
        if($(event.target).attr("data-name") === Questions[this.currentQuestion].correctAnswer){
            correctAnswers++;
            console.log("correct: "+ correctAnswers);
        }else{
            wrongAnswers++;
            console.log("wrong: "+ wrongAnswers);
        }

        if(currentQuestion === Questions.length -1){
            finishedTrivia();
        }else{
            nextQuestion();
        }
    }

    function timesUp(){
        clearInterval(timeup);
        unAnswered++;
        console.log("unanswered: "+ unAnswered);
        reset();
        $("#questionDiv").append("<div><h5>You ran out of time</h5></div>");
        $("#answerChoices").append("<div><img src =' https://media1.tenor.com/images/b24064ceff4e1d27efb60616e628e273/tenor.gif?itemid=4757906'></div>");


        if(currentQuestion === Questions.length -1){
            setTimeout(finishedTrivia, 3000);
        }else{
            setTimeout(nextQuestion, 3000);
        }
        
    }

    function finishedTrivia(){
        clearInterval(timeup);
        reset();
        $("#questionDiv").append("<div><h5>Congrats! You have completed the trivia</h5></div>");
        $("#answerChoices").append("<div>Here are your results</div><div>Correct answers: " + correctAnswers + "</div><div>Wrong answers: " + wrongAnswers + "</div><div>Unanswered: " + unAnswered + "</div><div><button id='playAgain'>Play again</button></div>");

        $("#playAgain").on("click", function(){
            startAgain();
        })
    }
//check which button was clicked by the user and execute checkAnswer function
$(document).on("click", "#button", function(event){
    checkAnswer(event);
})