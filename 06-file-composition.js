const fs = require('fs');

// Run this five times... Notice any difference?
fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => buildDataset('fNames', JSON.parse(data)));
fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => buildDataset('mNames', JSON.parse(data)));
fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => buildDataset('surnames', data.split(',\n')));

const dataset = {
  fNames: undefined,
  mNames: undefined,
  surnames: undefined,
}

function buildDataset(key, data) {
  dataset[key] = data;
  if (Object.values(dataset).every(value => value !== undefined)) {
    generateNames();
  }
}

function generateNames() {
  const { fNames, mNames, surnames } = dataset;
  const fNameSelection = getRandomItem(fNames);
  const fSurnameSelection = getRandomItem(surnames);

  const mNameSelection = getRandomItem(mNames);
  const mSurnameSelection = getRandomItem(surnames);
  console.log('Name 1:', `${fNameSelection} ${fSurnameSelection}`);
  console.log('Name 2:', `${mNameSelection} ${mSurnameSelection}`);
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
