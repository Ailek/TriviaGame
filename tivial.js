$(document).ready(function() {
    // set index to 0
    var index = 0;
    $(".answers").hide();
    // create timer
    var countdownTimer = {
        time : 30,
        reset: function() {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function() {
            counter = setInterval(countdownTimer.count, 1000);  
        },
        stop: function() {
            clearInterval(counter);
        },
        count: function() {
                countdownTimer.time--;
                console.log(countdownTimer.time);
//              $('.timer').html(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };

// setting right and wrongs for the first time
var correct = 0;
var wrong = 0;

// my favorite part of this whole assignment!!!
 // I spent tooo much time here!!! hence the lack of background
var q1 = {
    question : 'Who is singing about wolves these days?',
    possibleAnswers : ['A. Eminem',
                 'B. Cookie Monster',
                 'C. Selena Gomez',
                 'D. Elvis Presley'],
    flags : [false, false, true, false],
    answer : 'C. Selena Gomez'
};

var q2 = {
    question: 'What is the theme song for Will Smiths new Netflix original "Bright"?',
    possibleAnswers:['A. Wicked Game',
                 'B. Home',
                 'C. Gangster Paradise',
                 'D. Flashing Lights'],
    flags : [false, true, false, false],
    answer : 'B. Home'
};

var q3 = {
    question : 'What is the theme song for cinemax "strike back" series?',
    possibleAnswers :['A. Milkshake',
                 'B. Short Change Hero',
                 'C. PillowTalk',
                 'D. ABC'],
    flags : [false, true, false, false],
    answer : 'B. Short Change Hero'
};

var q4 = {
    question : 'Which of these songs did Prince sing in the 2007 Super Bowel?',
    possibleAnswers :['A. Purple Rain',
                 'B. rockstar',
                 'C. Love again',
                 'D. Everybody plays the fool'],
    flags : [true, false, false, false],
    answer : 'A. Purple Rain'
};

var q5 = {
    question : 'What is the song for the movie "The Breakfast Club"',
    possibleAnswers :['A. All by myself',
                 'B. Dont You Forget about me',
                 'C. I will survive',
                 'D. A Whole New World'],
    flags : [false, true, false, false],
    answer : 'B.  Dont You Forget about me'
};

// building the array from the questions
var questionArray = [q1, q2, q3, q4, q5];

// show question and answer on screen
function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}

// this is my start

function setup() {
    index = 0;
    $('.question').append('<button id="startButton">Start</button>');

     $('#startButton').on('click', function() {
        $(this).hide();
        $(".answers").show();
        countdownTimer.start();
        loadQuestion(index);
    });

}       

function getAnswer() {

// it alerts the answer choice on click

    $('.answerchoice').on('click', function() {
      console.log('alert', index);
        index++;
        console.log('click', index);
        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        loadQuestion();
    })
}

// this targets the correct answer
function answerCorrect() {
    correct++;
    alert("Correct!");
    console.log("correct");
}

// this targets the wrong answer
function answerWrong(display) {
    wrong++;
    alert("Incorrect!  The correct answer is " + display);
    console.log("wrong", display);
}

// this shows the score
function showScore() {
    $('.question').empty();
    $('.question').append("<h2><p>" + correct + " correct</p></h2>");
    $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $('.timer').empty();

}

// i'm setting up the functions for my buttons
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
    var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
    answerChosen = 'B';
 } else if (this.id == 'buttonC') {
    answerChosen = 'C';
 } else if (this.id == 'buttonD') {
    answerChosen = 'D';
 } 

 // get the user answer and compare it with coded answer
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
    answerCorrect();
 } else if (answerChosen == 'A') {
    answerWrong(questionArray[index].answer);
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
    answerCorrect();
 } else if (answerChosen == 'B') {
    answerWrong(questionArray[index].answer);
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
    answerCorrect();
 } else if (answerChosen == 'C') {
    answerWrong(questionArray[index].answer);
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
    answerCorrect();
 } else if (answerChosen == 'D') {
    answerWrong(questionArray[index].answer);
 }
// display code
 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');

 // positioin indicator
 index++;
 // if my index is less than my array then load question 
 // or else hide and show score
 if (index < questionArray.length) {
    loadQuestion(index);
 } else {
    $(".answerchoice").hide();
    showScore();
 }
});


});