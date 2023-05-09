// The Setup: countTimesRan * 100

let count = 0;
function countTimesRan() {
  console.log(`countTimesRan has run ${++count} times!`);
}

function maybeRun(callback, probability) {
  if (Math.random() < probability) {
    return callback();
  }
}

for (let i = 0; i < 100; i++) {
  maybeRun(countTimesRan, 0.5);
}
