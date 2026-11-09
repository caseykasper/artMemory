// ---------------------------------------------------------------
// Quiz data
// To add an artwork, copy one block and fill it in.
//  - alt:       describes what the picture LOOKS like without giving away the answer
//  - artAnswers / artistAnswers: every spelling you want to accept
//    (write them in plain lowercase; accents and punctuation are ignored)
//  - hint:      first hint (a second hint is made from the artist's name)
//  - fact:      shown after answering
// ---------------------------------------------------------------
const quizData = [
    {
        image: "Images/ChristBlessing.jpg",
        artTitle: "Christ Blessing",
        artist: "Bellini",
        artAnswers: "Christ Blessing",
        artistAnswers: "Bellini",
        hint: "This is a painting from Venice, Italy.",
        fact: "A church tower is in the background. What is usually found in a church tower?"
    },
    {
        image: "Images/Rhino.png",
        artTitle: "The Rhinoceros",
        artist: "Dürer",
        artAnswers: "The Rhinoceros",
        artistAnswers: ["Albrecht Dürer", "Dürer", "Durer"],
        hint: "This is a print made by carving wood, from Germany in 1515.",
        fact: "Dürer never saw this rhino in person! He worked from another artist's sketch and a written description, which is why the skin looks like armor."
    },
    {
        image: "Images/Banks.jpg",
        artTitle: "Banks of the Seine at Médan",
        artist: "Cezanne",
        artAnswers: ["Banks of the Seine at Médan", "Banks of the Seine at Medan"],
        artistAnswers: "Cezanne",
        hint: "A beautiful picture of this French river.",
        fact: ""
    },
    {
        image: "Images/BlindMan.jpg",
        artTitle: "The Blind Man of Toledo",
        artist: "Sorolla",
        artAnswers: "The Blind Man of Toledo",
        artistAnswers: "Sorolla",
        hint: "This man in Spain can't see.",
        fact: ""
    },
    {
        image: "Images/BlueEyes.jpg",
        artTitle: "Girl with Blue Eyes",
        artist: "Modigliani",
        artAnswers: "Girl with Blue Eyes",
        artistAnswers: "Modigliani",
        hint: "Look at her eyes.",
        fact: ""
    },
    {
        image: "Images/Cakes.jpg",
        artTitle: "Cakes",
        artist: "Thiebaud",
        artAnswers: "Cakes",
        artistAnswers: "Thiebaud",
        hint: "What food is in this picture?",
        fact: ""
    },
    {
        image: "Images/Cathedral.jpg",
        artTitle: "Cathedral",
        artist: "Pollock",
        artAnswers: "Cathedral",
        artistAnswers: "Pollock",
        hint: "It might look like a church, or a...",
        fact: ""
    },
    {
        image: "Images/FishingBoats.jpg",
        artTitle: "Fishing Boats (Le Perrey)",
        artist: "Braque",
        artAnswers: "Fishing Boats (Le Perrey)",
        artistAnswers: "Braque",
        hint: "This is a painting of boats.",
        fact: ""
    },
    {
        image: "Images/GinevraDeBenci.jpg",
        artTitle: "Ginevra de' Benci [obverse]",
        artist: "Leonardo",
        artAnswers: "Ginevra de' Benci [obverse]",
        artistAnswers: "Leonardo",
        hint: "One of the Ginevra paintings, this one by Leo...",
        fact: ""
    },
    {
        image: "Images/GinevraBenti.jpg",
        artTitle: "Ginevra Bentivoglio",
        artist: "Ercole",
        artAnswers: "Ginevra Bentivoglio",
        artistAnswers: "Ercole",
        hint: "One of the Ginevra paintings.",
        fact: ""
    },
    {
        image: "Images/Girl.jpg",
        artTitle: "Girl Arranging Her Hair",
        artist: "Cassatt",
        artAnswers: "Girl Arranging Her Hair",
        artistAnswers: "Cassatt",
        hint: "What is she doing with her hair?",
        fact: ""
    },
    {
        image: "Images/Golfe.jpg",
        artTitle: "Golfe Juan",
        artist: "Dufy",
        artAnswers: "Golfe Juan",
        artistAnswers: "Dufy",
        hint: "This painting make me want to play golf...",
        fact: ""
    },
    {
        image: "Images/Grandmother.jpg",
        artTitle: "Portrait of My Grandmother",
        artist: "Motley Jr.",
        artAnswers: "Portrait of My Grandmother",
        artistAnswers: "Motley Jr.",
        hint: "This is a painting of his...",
        fact: ""
    },
    {
        image: "Images/Hartley.jpg",
        artTitle: "Hartley",
        artist: "Neel",
        artAnswers: "Hartley",
        artistAnswers: "Neel",
        hint: "Don't be sad. Gotta have heart.",
        fact: ""
    },
    {
        image: "Images/Head.jpg",
        artTitle: "Head of a Young Man",
        artist: "Rubens",
        artAnswers: "Head of a Young Man",
        artistAnswers: "Rubens",
        hint: "It's a head of a...",
        fact: ""
    },
    {
        image: "Images/Jasper.jpg",
        artTitle: "Jasper",
        artist: "Close",
        artAnswers: "Jasper",
        artistAnswers: "Close",
        hint: "This painting's artist is not far.",
        fact: ""
    },
    {
        image: "Images/LaCondition.jpg",
        artTitle: "La condition humaine",
        artist: "Magritte",
        artAnswers: "La condition humaine",
        artistAnswers: "Magritte",
        hint: "This is a painting from France, and has a French name.",
        fact: ""
    },
    {
        image: "Images/LaMouseme.jpg",
        artTitle: "La Mousmé",
        artist: "Van Gogh",
        artAnswers: ["La Mousmé", "La Mousme"],
        artistAnswers: "Van Gogh",
        hint: "She does look a little mousy.",
        fact: ""
    },
    {
        image: "Images/OnThePont.jpg",
        artTitle: "On the Pont de l’Europe",
        artist: "Caillebotte",
        artAnswers: "On the Pont de l’Europe",
        artistAnswers: "Caillebotte",
        hint: "It is a painting in Europe.",
        fact: ""
    },
    {
        image: "Images/Parson.jpg",
        artTitle: "Parson Weems' Fable",
        artist: "Wood",
        artAnswers: "Parson Weems' Fable",
        artistAnswers: "Wood",
        hint: "George is chopping a tree, which will get you not lumber, but... (artist's name).",
        fact: ""
    },
    {
        image: "Images/Saint.jpg",
        artTitle: "Saint Rufina",
        artist: "Murillo",
        artAnswers: "Saint Rufina",
        artistAnswers: "Murillo",
        hint: "This is a painting of a saint.",
        fact: ""
    },
    {
        image: "Images/Self.jpg",
        artTitle: "Self-Portrait",
        artist: "Rembrandt",
        artAnswers: "Self-Portrait",
        artistAnswers: "Rembrandt",
        hint: "This is a painting of himself, so it is a...",
        fact: ""
    },
    {
        image: "Images/StillLife.jpg",
        artTitle: "Still Life with Golden Bream",
        artist: "Goya",
        artAnswers: "Still Life with Golden Bream",
        artistAnswers: "Goya",
        hint: "What is the fish's name?",
        fact: ""
    },
    {
        image: "Images/ThatGentleman.jpg",
        artTitle: "That Gentleman",
        artist: "Wyeth",
        artAnswers: "That Gentleman",
        artistAnswers: "Wyeth",
        hint: "Why is that gentleman sitting in the dark?",
        fact: ""
    },
    {
        image: "Images/TheNativity.jpg",
        artTitle: "The Nativity",
        artist: "Christus",
        artAnswers: "The Nativity",
        artistAnswers: "Christus",
        hint: "Christ was born in the...",
        fact: ""
    },
    {
        image: "Images/TheStoryteller.jpg",
        artTitle: "The Storyteller",
        artist: "Tiepolo",
        artAnswers: "The Storyteller",
        artistAnswers: "Tiepolo",
        hint: "He is telling a...",
        fact: ""
    },
    {
        image: "Images/TheTemple.jpg",
        artTitle: "Tivoli: The Temple of the Sybil and the Campagna",
        artist: "Wilson",
        artAnswers: "Tivoli: The Temple of the Sybil and the Campagna",
        artistAnswers: "Wilson",
        hint: "This is a temple in the countryside.",
        fact: ""
    },
    {
        image: "Images/Untitled.jpg",
        artTitle: "Untitled",
        artist: "Rothko",
        artAnswers: "Untitled",
        artistAnswers: "Rothko",
        hint: "It wasn't titled, so it is...",
        fact: ""
    },
    {
        image: "Images/Washerwomen.jpg",
        artTitle: "Washerwomen on the Beach of Etretat",
        artist: "Boudin",
        artAnswers: "Washerwomen on the Beach of Etretat",
        artistAnswers: "Boudin",
        hint: "There are many women, and they are washing...",
        fact: ""
    },
    {
        image: "Images/ZimZum.jpg",
        artTitle: "Zim Zum",
        artist: "Kiefer",
        artAnswers: "Zim Zum",
        artistAnswers: "Kiefer",
        hint: "It says the name in the picture.",
        fact: ""
    },
];

const POINTS_PER_PART = 5;

// ---------------------------------------------------------------
// Page elements
// ---------------------------------------------------------------
const $ = (id) => document.getElementById(id);

const quizMain = $("quiz");
const questionSection = $("question-section");
const resultsSection = $("results-section");
const artImage = $("art-image");
const imageError = $("image-error");
const placard = $("placard");
const form = $("answer-form");
const artInput = $("art-user-input");
const artistInput = $("artist-user-input");
const submitBtn = $("submit-btn");
const hintBtn = $("hint-btn");
const hintText = $("hint-text");
const resultMessage = $("result-message");
const nextBtn = $("next-btn");
const restartBtn = $("restart-btn");
const scoreDisplay = $("score");
const streakDisplay = $("streak");
const progress = $("progress");
const progressLabel = $("progress-label");
const finalScore = $("final-score");

// ---------------------------------------------------------------
// State
// ---------------------------------------------------------------
let questions = [];
let currentIdx = 0;
let score = 0;
let streak = 0;
let hintsUsed = 0;
let answered = false;

// ---------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------
function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// Lowercase, remove accents and punctuation, ignore a leading "the"
function normalize(text) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/^the /, "");
}

function editDistance(a, b) {
    const rows = a.length + 1;
    const cols = b.length + 1;
    const d = Array.from({ length: rows }, (_, i) => [i, ...Array(cols - 1).fill(0)]);
    for (let j = 0; j < cols; j++) d[0][j] = j;
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        }
    }
    return d[a.length][b.length];
}

// Accept small typos: longer answers allow more mistakes
function isMatch(userText, accepted) {
    const acceptedList = Array.isArray(accepted) ? accepted : [accepted];
    const guess = normalize(userText);
    if (!guess) return false;
    return acceptedList.some((answer) => {
        const target = normalize(answer);
        const allowed = target.length <= 4 ? 0 : target.length <= 8 ? 1 : 2;
        return editDistance(guess, target) <= allowed;
    });
}

// ---------------------------------------------------------------
// Question flow
// ---------------------------------------------------------------
function loadQuestion() {
    const q = questions[currentIdx];
    answered = false;
    hintsUsed = 0;

    imageError.hidden = true;
    artImage.hidden = false;
    artImage.alt = q.alt || "Artwork to identify";
    artImage.src = q.image;

    placard.hidden = true;
    placard.textContent = "";

    artInput.value = "";
    artistInput.value = "";
    artInput.disabled = false;
    artistInput.disabled = false;
    submitBtn.disabled = false;
    hintBtn.disabled = false;

    hintText.textContent = "";
    resultMessage.hidden = true;
    resultMessage.textContent = "";
    resultMessage.className = "feedback";
    nextBtn.hidden = true;

    progress.max = questions.length;
    progress.value = currentIdx;
    progressLabel.textContent = `Artwork ${currentIdx + 1} of ${questions.length}`;
}

function giveHint() {
    if (answered) return;
    const q = questions[currentIdx];
    const lastName = q.artist.replace(/\s+(jr|sr)\.?$/i, "").split(" ").pop();
    const hints = [
        q.hint,
        `The artist's last name starts with "${lastName.charAt(0)}".`
    ];
    if (hintsUsed < hints.length) {
        hintsUsed++;
        hintText.textContent = "Hint: " + hints.slice(0, hintsUsed).join(" ");
    }
    if (hintsUsed >= hints.length) {
        hintBtn.disabled = true;
    }
}

function checkAnswer(event) {
    event.preventDefault();
    if (answered) return;

    const q = questions[currentIdx];
    const artRight = isMatch(artInput.value, q.artAnswers);
    const artistRight = isMatch(artistInput.value, q.artistAnswers);

    answered = true;
    artInput.disabled = true;
    artistInput.disabled = true;
    submitBtn.disabled = true;
    hintBtn.disabled = true;

    let points = 0;
    let headline;
    if (artRight && artistRight) {
        points = POINTS_PER_PART * 2;
        headline = "✓ Correct! You named both.";
        streak++;
    } else if (artRight || artistRight) {
        points = POINTS_PER_PART;
        headline = artRight
            ? "✓ Nice! You got the artwork."
            : "✓ Nice! You got the artist.";
        streak = 0;
    } else {
        headline = "✗ Not this time. Now you know it for next time!";
        streak = 0;
    }

    score += points;
    scoreDisplay.textContent = score;
    streakDisplay.textContent = streak;

    resultMessage.className = "feedback " + (points > 0 ? "good" : "miss");
    resultMessage.replaceChildren();
    const line1 = document.createElement("p");
    line1.className = "feedback-title";
    line1.textContent = headline;
    const line2 = document.createElement("p");
    line2.textContent = `Artwork: ${artRight ? "✓" : "✗"}   Artist: ${artistRight ? "✓" : "✗"}   +${points} points`;
    resultMessage.append(line1, line2);
    if (q.fact) {
        const line3 = document.createElement("p");
        line3.textContent = q.fact;
        resultMessage.append(line3);
    }
    resultMessage.hidden = false;

    // Museum-style label under the picture
    placard.textContent = [q.artTitle, q.artist, q.year].filter(Boolean).join(", ");
    placard.hidden = false;

    if (currentIdx < questions.length - 1) {
        nextBtn.textContent = "Next artwork";
    } else {
        nextBtn.textContent = "See my results";
    }
    nextBtn.hidden = false;

    // Move focus to the feedback so screen readers read it; Tab reaches "Next" right after.
    resultMessage.focus();
}

function nextQuestion() {
    if (currentIdx < questions.length - 1) {
        currentIdx++;
        loadQuestion();
        artInput.focus();
    } else {
        showResults();
    }
}

function showResults() {
    progress.value = questions.length;
    questionSection.hidden = true;
    resultsSection.hidden = false;
    const best = questions.length * POINTS_PER_PART * 2;
    finalScore.textContent = `You scored ${score} out of ${best} points.`;
    $("results-heading").focus();
}

function startQuiz() {
    questions = shuffle(quizData);
    currentIdx = 0;
    score = 0;
    streak = 0;
    scoreDisplay.textContent = 0;
    streakDisplay.textContent = 0;
    resultsSection.hidden = true;
    questionSection.hidden = false;
    loadQuestion();
}

// ---------------------------------------------------------------
// Events
// ---------------------------------------------------------------
form.addEventListener("submit", checkAnswer);
hintBtn.addEventListener("click", giveHint);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => {
    startQuiz();
    artInput.focus();
});
artImage.addEventListener("error", () => {
    artImage.hidden = true;
    imageError.hidden = false;
});

startQuiz();