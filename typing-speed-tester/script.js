const textSamples = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing fast and accurately is a valuable skill.",
  "Practice every day to improve your typing speed.",
];

let startTime, endTime;
let targetText = "";

function startTest() {
  targetText = textSamples[Math.floor(Math.random() * textSamples.length)];
  document.getElementById("text-display").innerText = targetText;
  const input = document.getElementById("text-input");
  input.disabled = false;
  input.value = "";
  input.focus();
  startTime = new Date().getTime();
}

function resetTest() {
  document.getElementById("text-display").innerText = "Click \"Start\" to begin typing test.";
  document.getElementById("text-input").value = "";
  document.getElementById("text-input").disabled = true;
  document.getElementById("result").innerText = "";
}

document.getElementById("text-input").addEventListener("input", function () {
  const inputText = this.value;

  if (inputText === targetText) {
    endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const words = targetText.split(" ").length;
    const speed = (words / timeTaken) * 60; // words per minute

    const accuracy = calculateAccuracy(inputText, targetText);

    document.getElementById("result").innerHTML =
      `Speed: ${speed.toFixed(2)} WPM<br>Accuracy: ${accuracy.toFixed(2)}%`;
    this.disabled = true;
  }
});

function calculateAccuracy(typed, original) {
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === original[i]) {
      correct++;
    }
  }
  return (correct / original.length) * 100;
}
