let count = 1;

const timer = setInterval(() => {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(timer); // Stop the interval after 5
  }
}, 1000); // Runs every 1000ms = 1 second
