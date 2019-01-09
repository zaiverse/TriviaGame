//declare global variables
var correctAnswers = 0;
var wrongAnswers = 0;
var currentQuestion = 0;
var counter = 20;
var questionNumber = 0;
let trivia;

//variable that stores questions, choices, and answers for the trivia
var Questions = [
        {
            question: "what is the largest sea animal",
            choices: ["blue whale", "crab", "me"],
            answer: 1
        },
        {
            question: "How deep is the ocean",
            choices: ["unknown", "10,994 meters", "sometin"],
            answer: 2
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
                timeOut();
            }
        }, 1000)
    }

    function displayQuestion(){
        $('#questionDiv').text(Questions[this.currentQuestion].question);
        for(var i=0; i< Questions[this.currentQuestion].choices.length; i++){
            $('#answerChoices').append("<div><button class='answer-button' id='button' data-name='" + Questions[this.currentQuestion].choices[i]
            + "'>" + Questions[this.currentQuestion].choices[i] + "</button></div>");
        }
    }
  
