$(document).ready(function() {
    var index = 0;
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

var correct = 0;
var wrong = 0;
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
    question : 'What is the song for the movie "The Breakfast Club',
    possibleAnswers :['A. All by myself',
                 'B. Dont You Forget about me',
                 'C. I will survive',
                 'D. A Whole New World'],
    flags : [false, true, false, false],
    answer : 'B.  Dont You Forget about me'
};


var questionArray = [q1, q2, q3, q4, q5];

function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
    index = 0;
    $('.question').append('<button id="startButton">Start</button>');
    $('#startButton').on('click', function() {
        $(this).hide();
        countdownTimer.start();
        loadQuestion(index);
    });
}       

function getAnswer() {


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

function answerCorrect() {
    correct++;
    alert("Correct!");
    console.log("correct");
}

function answerWrong() {
    wrong++;
    alert("Incorrect!");
    console.log("wrong");
}

function showScore() {
    $('.question').empty();
    $('.question').append("<h2><p>" + correct + " correct</p></h2>");
    $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $('.timer').empty();

}


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
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
    answerCorrect();
 } else if (answerChosen == 'A') {
    answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
    answerCorrect();
 } else if (answerChosen == 'B') {
    answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
    answerCorrect();
 } else if (answerChosen == 'C') {
    answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
    answerCorrect();
 } else if (answerChosen == 'D') {
    answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
    loadQuestion(index);
 } else {
    $(".answerchoice").hide();
    showScore();
 }
});


});