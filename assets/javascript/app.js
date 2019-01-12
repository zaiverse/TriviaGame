//declare global variables
var correctAnswers = 0;
var wrongAnswers = 0;
var currentQuestion = 0;
var counter = 20;

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
        setInterval(function(){
            if(counter > 0){
            $('#timer').text('Time remaining: ' + --counter);
            }
            if(counter <= 0){
                alert("timesup")
            }
        }, 1000)
    }

    function reset(){
        $("#questionDiv").empty();
        $('#answerChoices').empty();
    }
    
    //function for question display
    function displayQuestion(){
        timer();
        reset();
        $('#questionDiv').append("<h5>" + Questions[this.currentQuestion].question + "</h5>");
        for(var i=0; i< Questions[this.currentQuestion].choices.length; i++){
            $('#answerChoices').append("<div><button class='answer-button' id='button' class='choiceButton' data-name='" + Questions[this.currentQuestion].choices[i]
            + "'>" + Questions[this.currentQuestion].choices[i] + "</button></div>");
        }
    }
    
    //create function to iterate currentQuestion by one 
    function nextQuestion(){
            currentQuestion++;
            displayQuestion();
    }
    //check whether button clicked is === to correctAnswer
    function checkAnswer(event){
        if($(event.target).attr("data-name") === Questions[this.currentQuestion].correctAnswer){
            correctAnswers++;
            console.log(correctAnswers);
            nextQuestion();
        }else{
            wrongAnswers++;
            console.log(wrongAnswers);
        }
    }
    function timesUp(){

    }

    function userAnswer(){

    }
//check which button was clicked by the user and execute checkAnswer function
$(document).on("click", "#button", function(event){
    checkAnswer(event);
})