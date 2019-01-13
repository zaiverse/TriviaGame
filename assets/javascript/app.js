//declare global variables
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var currentQuestion = 0;
var counter = 20;

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
            question: "Which of these shark species is the smallest",
            choices: ["Pygmy shark", "Spotted wobbegong", "Pelagic thresher"],
            correctAnswer: "Pygmy shark"
        },
        {
            question: "How deep is the ocean",
            choices: ["39,900 meters", "10,994 meters", "60,309 meters"],
            correctAnswer: "10,994 meters"
        },
        {
            question: "About 70% of the oxygen we breathe is produced by the oceans",
            choices: ["True", "False"],
            correctAnswer: "True"
        },
        {
            question: "Up to how much can a Blue whale weigh?",
            choices: ["100,700 lbs","203,080 lbs", "300,000 lbs"],
            correctAnswer: "300,000 lbs"
        },
        {
            question: "When salt water and hydrogen sulphide combine in the ocean...",
            choices: ["The water becomes inhabitable for life to thrive", "A lake or river that flows beaneath the sea is formed", "Both of the above", "None of the above"],
            correctAnswer: "A lake or river that flows beaneath the sea is formed"
        },
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
            alert("Correct!");
        }else{
            wrongAnswers++;
            console.log("wrong: "+ wrongAnswers);
            alert("Wrong! Correct answer is: " + Questions[this.currentQuestion].correctAnswer);
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
        $("#answerChoices").append("<div><h5>The correct answer was: "+ Questions[this.currentQuestion].correctAnswer +"</h5></div>");
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