$(document).ready(function () {
    //Global Variables==================
    var libraryOfInfo = [{
            question: "What is the proper term for a group of kittens?",
            answers: ["Kindle", "Kettle", "Kaboodle", "Kine"],
            correct: "Kindle",
        }, {
            question: "All cats are born with what color eyes?",
            answers: ["Blue", "Pink", "Green", "Black"],
            correct: "Blue",
        }, {
            question: "What percentage of a cat's bones are in its tail?",
            answers: ["None", "10%", "20%", "30%"],
            correct: "10%",
        }, {
            question: "How many different sounds can a cat make?",
            answers: ["150", "10", "50", "100"],
            correct: "100",
        }, {
            question: "What is the normal body temperature of a cat?",
            answers: ["94 &#176 F", "98 &#176 F", "102 &#176 F", "107 &#176 F"],
            correct: "102 &#176 F",
        },

    ]

    var number = 20;
    var intervalId;
    var correctAnswerCount = 0;
    var inCorrAnswerCount = 0;
    var unAnswerCount = 0;

    //Functions===================
    function gameBegin() {
        $("#startBtn").on("click", function () {
            // $("img").hide(2000);
            $(this).remove();
            $("#quizSection").toggle();
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);

            for (var i = 0; i < libraryOfInfo.length; i++) {
                var newQuestion = $("<div>");
                newQuestion.addClass("question");
                newQuestion.text(libraryOfInfo[i].question);
                console.log(libraryOfInfo[i].question)
                $("#content").append(newQuestion);
                var newAnswers = $("<div>");
                newAnswers.addClass("answers row");

                console.log(libraryOfInfo[i].correct)

                for (var j = 0; j < libraryOfInfo[i].answers.length; j++) {
                    var oneAnswer = $("<div class='col-md'>")
                    var answerChoices = $('<input type="radio" name="question' + i + '" value="' + libraryOfInfo[i].answers[j] + '"><label for="' + libraryOfInfo[i].answers[j] + '"> ' + libraryOfInfo[i].answers[j] + '</label>');
                    // answerChoices.addClass("col-md").attr("data-name", libraryOfInfo[i].answers[j]);
                    answerChoices.html(libraryOfInfo[i].answers[j]);
                    answerChoices.appendTo(oneAnswer);
                    oneAnswer.appendTo(newAnswers);

                    $("#content").append(newAnswers)

                }
            }

        });
    }

    function stop() {
        $("#quizSection").toggle();

        $(".container").append("<h1 class='text-center'>All Done!!</h1>")
        //add a div to hold the corrected answers scores
        var correctAnswerContainer = $("<h2 class='text-center'>Correct Answers: <span>" + correctAnswerCount + "</span>");

        //append to .container
        $(".container").append(correctAnswerContainer)

        //add a div to hold the incorrected  answers scores
        var inCorrAnswerContainer = $("<h2 class='text-center'>Incorrect Answers: <span>" + inCorrAnswerCount + "</span>");

        //add data to inCorrAnswerCount. 
        $(".container").append(inCorrAnswerContainer)
        //append to .container

        var unAnsContainer = $("<h2 class='text-center'>Unanswered: <span>" + unAnswerCount + "</span>");
        $(".container").append(unAnsContainer)
    };

    function decrement() {

        //  Decrease number by one.
        number--;

        //  Show the number in the #show-number tag.
        $("#timer").text(number + " seconds");

        //  Once number hits zero...
        if (number === 0) {
            //  ...run the stop function.
            checkAnswers();
            stop();
            //  Alert the user that time is up.
            alert("Time Up!");

        }
    }



    function checkAnswers() {

        //get what value of that radio button
        var answerValue = $('input[name="question0"]:checked').val();
        console.log(answerValue);
        // check if radio button is same with the correct answer.
        if (answerValue) {
            if (answerValue === libraryOfInfo[0].correct) {
                correctAnswerCount++;
                console.log("correct answers: " + correctAnswerCount)
            } else {
                inCorrAnswerCount++;
                console.log("Incorrect answers: " + inCorrAnswerCount)
            }
        } else {
            unAnswerCount++;
            console.log("No answers " + unAnswerCount)
        }

        //get what value of that radio button
        var answerValue = $('input[name="question1"]:checked').val();
        console.log(answerValue);
        // check if radio button is same with the correct answer.
        if (answerValue) {
            if (answerValue === libraryOfInfo[1].correct) {
                correctAnswerCount++;
                console.log("correct answers: " + correctAnswerCount)
            } else {
                inCorrAnswerCount++;
                console.log("Incorrect answers: " + inCorrAnswerCount)
            }
        } else {
            unAnswerCount++;
            console.log("No answers " + unAnswerCount)
        }

        //get what value of that radio button
        var answerValue = $('input[name="question2"]:checked').val();
        console.log(answerValue);
        // check if radio button is same with the correct answer.
        if (answerValue) {
            if (answerValue === libraryOfInfo[2].correct) {
                correctAnswerCount++;
                console.log("correct answers: " + correctAnswerCount)
            } else {
                inCorrAnswerCount++;
                console.log("Incorrect answers: " + inCorrAnswerCount)
            }
        } else {
            unAnswerCount++;
            console.log("No answers " + unAnswerCount)
        }

        //get what value of that radio button
        var answerValue = $('input[name="question3"]:checked').val();
        console.log(answerValue);
        // check if radio button is same with the correct answer.
        if (answerValue) {
            if (answerValue === libraryOfInfo[3].correct) {
                correctAnswerCount++;
                console.log("correct answers: " + correctAnswerCount)
            } else {
                inCorrAnswerCount++;
                console.log("Incorrect answers: " + inCorrAnswerCount)
            }
        } else {
            unAnswerCount++;
            console.log("No answers " + unAnswerCount)
        }

        //get what value of that radio button
        var answerValue = $('input[name="question4"]:checked').val();
        console.log(answerValue);
        // check if radio button is same with the correct answer.
        if (answerValue) {
            if (answerValue === libraryOfInfo[4].correct) {
                correctAnswerCount++;
                console.log("correct answers: " + correctAnswerCount)
            } else {
                inCorrAnswerCount++;
                console.log("Incorrect answers: " + inCorrAnswerCount)
            }
        } else {
            unAnswerCount++;
            console.log("No answers " + unAnswerCount)
        }


    }

    //GAME RUN=============

    gameBegin();
    $("#startBtn").slideUp(2000).slideDown(2000)

});