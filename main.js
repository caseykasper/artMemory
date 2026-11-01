const quizData = [
    {
        image: "Images/ChristBlessing.jpg",
        artAnswer: "Christ Blessing",
        artistAnswer: "Bellini"

    },
    {
        image: "Images/Rhino.png",
        artAnswer: "The Rhinoceros",
        artistAnswer: "Durer"
    }
]

let currentIdx = 0;

const artImage = document.getElementById("art-image");
const artUserInput = document.getElementById("art-user-input");
const artistUserInput = document.getElementById("artist-user-input");
const resultMessage = document.getElementById("result-message");
const nextBtn = document.getElementById("next-btn");

// Load the first question
function loadQuestion() {
    const currentQuiz = quizData[currentIdx];
    artImage.src = currentQuiz.image;
    artUserInput.value = "";
    artistUserInput.value = "";
    resultMessage.textContent = "";
    nextBtn.style.display = "none";
}

// Compare user input with the correct answer
function checkAnswer() {
    const artUserAnswer = artUserInput.value.trim()
    const artistUserAnswer = artistUserInput.value.trim()
    const correctArtAnswer = quizData[currentIdx].artAnswer.trim();
    const correctArtistAnswer = quizData[currentIdx].artistAnswer.trim();

    if (artUserAnswer === correctArtAnswer && artistUserAnswer === correctArtistAnswer) {
        resultMessage.textContent = "Correct! Great job.";
        resultMessage.style.color = "green";
    } else if (artUserAnswer === correctArtAnswer) {
        resultMessage.textContent = `Great! You got the artwork! The artist's name is "${quizData[currentIdx].artistAnswer}".`;
        resultMessage.style.color = "green";
    } else if (artistUserAnswer === correctArtistAnswer) {
        resultMessage.textContent = `Great! You got the artist! The artwork  is "${quizData[currentIdx].artAnswer}".`;
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = `Good try. The correct answer was "${quizData[currentIdx].artAnswer}" by "${quizData[currentIdx].artistAnswer}".`;
        resultMessage.style.color = "red";
    }

    if (currentIdx < quizData.length - 1) {
        nextBtn.style.display = "inline-block";
    } else {
        resultMessage.textContent += " You've finished the quiz!";
    }
}

// Move to the next image
function nextQuestion() {
    currentIdx++;
    loadQuestion();
}

// Initialize the first question on load
loadQuestion();
