// Start timer
let seconds = 0;

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

setInterval(() => {
  seconds++;
  document.getElementById("timerDisplay").textContent = formatTime(seconds);
}, 1000);

// Optional: Button click handler
document.getElementById("submitButton").addEventListener("click", () => {
  const value = document.getElementById("userInput").value;
  alert("You entered: " + value);
});
