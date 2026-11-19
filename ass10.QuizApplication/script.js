// Correct answers
const answers = {
    q1: "JavaScript",
    q2: "var",
    q3: "push",
    q4: "a",
    q5: "setInterval"
};


// Handle quiz submission
document.getElementById("quizForm").addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    let score = 0;
    let correct = 0;
    let incorrect = 0;

    // Check each question
    for (let i = 1; i <= 5; i++) {

        let selected = document.querySelector(
            'input[name="q' + i + '"]:checked'
        );

        if (selected) {

            if (selected.value === answers["q" + i]) {
                score++;
                correct++;
            }
            else {
                incorrect++;
            }

        }
        else {
            incorrect++;
        }
    }


    // Display result
    let result = document.getElementById("result");

    result.innerHTML = `
        <h2>Quiz Result</h2>

        <p><strong>Score:</strong> ${score} / 5</p>

        <p>Correct Answers: ${correct}</p>

        <p>Incorrect / Unanswered: ${incorrect}</p>

        <p>
            ${score >= 3
                ? "Congratulations! You passed."
                : "Keep practicing and try again."}
        </p>
    `;

});