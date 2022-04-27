let randomAnswer, guessNumber, maxGuesses, dayNumber, gameResult;

$(function() {
    getTodaysClue();
    if(localStorage.getItem("movie-guesser-dayNumber") != null){
        if(localStorage.getItem("movie-guesser-dayNumber") == dayNumber){
            randomAnswer = getTodaysClue();
            maxGuesses = 6;
            returningPlayer();
        } else {
            reset();
        }
    } else {
        reset();
    }
    dropdownOptions();
});

function reset(){
    localStorage.clear();
    setVariables();
    resetUI();
    showClue();
    showAnswerBox();
    storeDayNumber();
}

function setVariables(){
    randomAnswer = getTodaysClue();
    maxGuesses = 6;
    guessNumber = 1;
    localStorage.setItem("movie-guesser-guessNumber", guessNumber);
}

function getTodaysClue(){
    let thisTimestamp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
    let yearFirstDay = Math.floor(thisTimestamp / 86400000);
    let today = Math.ceil((new Date().getTime()) / 86400000);
    let dayOfYear = today - yearFirstDay;
    dayNumber = dayOfYear;
    let answerNum = answerOrder[dayOfYear];
    return answerData[answerNum];
}

function storeDayNumber(){
    localStorage.setItem("movie-guesser-dayNumber", dayNumber);
}

function dropdownOptions(){
    let answerArr = JSON.parse(JSON.stringify(answerData));
    answerArr.sort((a, b) => {
        let ta = a.title.toLowerCase(),
            tb = b.title.toLowerCase();
    
        if (ta < tb) {
            return -1;
        }
        if (ta > tb) {
            return 1;
        }
        return 0;
    });

    for(let item in answerArr){
        var x = document.getElementById('guess');
        var option = document.createElement('option');
        option.text = answerArr[item].title;
        option.value = answerArr[item].title;
        x.add(option);
    }
    $('#guess').select2();
}

function resetUI(){
    $('#answer2').hide();
    $('#answer3').hide();
    $('#answer4').hide();
    $('#answer5').hide();
    $('#answerBox').html(``);
    $('.clue').text('');
    $("#guess").prop('disabled', false);
    $('#guess').val('');
    $('#select2-guess-container').text('Select a movie');
    $('.potential-answer').removeClass('correct-guess');
    $('.potential-answer').removeClass('incorrect-guess');
    $('.potential-answer').text('');
    $('.subBtn').html(`<button id="phraseBtn" class="button-18" onclick="phraseSub()">Guess</button>`);
}

function showClue(){
    $(`#clue${guessNumber}`).html(randomAnswer[`clue${guessNumber}`]);
}

function showAnswerBox() {
    $(`#answer${guessNumber}`).show();
}

function phraseSub(){
    event.preventDefault();
    let guess = $("#guess").val();
    $("#guess").val() != null ? handleGuess(guess) : $('#phraseBtn').effect("shake");
};

function handleGuess(guess){
    let answerBox = '#answer' + guessNumber;
    let localGuess = 'guess' + guessNumber;
    localStorage.setItem(`movie-guesser-${localGuess}`, guess);
    $(answerBox).text(guess);
    if(guess == randomAnswer.title){
        $(answerBox).addClass("correct-guess");
        localStorage.setItem(`movie-guesser-${localGuess}-class`, "correct-guess");
        gameResult = 'win';
        localStorage.setItem("movie-guesser-gameResult", gameResult);
        handleResult();
    } else {
        $(answerBox).addClass("incorrect-guess");
        localStorage.setItem(`movie-guesser-${localGuess}-class`, "incorrect-guess");
        if(guessNumber < maxGuesses){
            $('#guess').val('');
            $('#select2-guess-container').text('Select a movie')
            guessNumber++;
            localStorage.setItem("movie-guesser-guessNumber", guessNumber);
            showClue();
            showAnswerBox();
        } else {
            gameResult = 'lose';
            localStorage.setItem("movie-guesser-gameResult", gameResult);
            handleResult();
        }
    }
}

function handleResult(){
    let resultText = gameResult == 'win' ? `<p>You got it!</p>` 
                    : `<p>The answer was '${randomAnswer.title}'.</p>`; 
    $("#guess").prop('disabled', true);
    $('#guess').val('');
    $('#select2-guess-container').text('Select a movie');
    $('.subBtn').html(`<button id="shareBtn" class="button-18" onclick="share()">Share</button>`);
    $('#answerBox').html(`${resultText}`);
    $('#scoreList').html(`${getScore()}`);
    $('#countdownHeader').html('Next Game:');
    showTime();
}

function getScore(){
    if(guessNumber == 1){
        return `🟩⬛⬛⬛⬛⬛`
    } else if(guessNumber == 2){
        return `🟥🟩⬛⬛⬛⬛`;
    } else if(guessNumber == 3){
        return `🟥🟥🟩⬛⬛⬛`;
    } else if(guessNumber == 4){
        return `🟥🟥🟥🟩⬛⬛`;
    } else if(guessNumber == 5){
        return `🟥🟥🟥🟥🟩⬛`;
    } else if(guessNumber == 6 && gameResult == 'win'){
        return `🟥🟥🟥🟥🟥🟩`;
    } else {
        return `🟥🟥🟥🟥🟥🟥`;
    }
}

function share(){
    event.preventDefault();
    navigator.clipboard.writeText(`Movie Guesser #${dayNumber}` + '\n' + `🎬${getScore()}` + '\n' + 'https://esdidubs.github.io/movie-guesser');
    $('#shareBtn').text('Copied!');
    const copyTimeout = setTimeout(updateShareButton, 3000);
}

function updateShareButton(){
    $('#shareBtn').text('Share');
}

function returningPlayer(){

    guessNumber = localStorage.getItem("movie-guesser-guessNumber");

    for(let i=1; i<=localStorage.getItem("movie-guesser-guessNumber"); i++){
        $(`#clue${i}`).html(randomAnswer[`clue${i}`]);
        $(`#answer${i}`).show();
        if(localStorage.getItem(`movie-guesser-guess${i}`) != null){
            $(`#answer${i}`).text(localStorage.getItem(`movie-guesser-guess${i}`));
            $(`#answer${i}`).addClass(localStorage.getItem(`movie-guesser-guess${i}-class`));
        }
        if(localStorage.getItem(`movie-guesser-gameResult`) != null){
            gameResult = localStorage.getItem(`movie-guesser-gameResult`);
            handleResult();
        }
    }
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    
    h = 23-h;
    m = 59-m;
    s = 59-s;
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("countdownDisplay").innerText = time;
    document.getElementById("countdownDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}