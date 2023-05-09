const fs = require('fs');

const handleSecondRead = (error, newCount) => {
  console.log({
    currentCount,
    newCount,
  });
}

fs.readFile('./counter', { encoding: 'utf-8' }, function(error, currentCount) {
  if (error) return;
  fs.writeFile('./counter', String(Number(currentCount) + 1), function() {
    fs.readFile('./counter', { encoding: 'utf-8' }, handleSecondRead);
  });
});
