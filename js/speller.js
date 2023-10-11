export default {
  check,
  lookup,
};

var elements;

await loadPeriodicTable();

// ****************************

async function loadPeriodicTable() {
  elements = await (await fetch("periodic-table.json")).json();
  console.log(elements);
}

function check(inputWord) {
  const word = inputWord.toLowerCase().split("");
  const peaces = [];
  for (let i = 0; i < word.length; i++) {
    let temL = "";
    const letter = word[i].toLowerCase();
    const el = elements.find((i) => i.symbol.toLowerCase() === letter);
    if (el) temL = el.symbol.toLowerCase();
    if (i !== word.length - 1) {
      const newWord = letter + word[i + 1];
      const el = elements.find((i) => i.symbol.toLowerCase() === newWord);
      if (el) {
        let letterComp = "";

        letterComp = el.symbol.toLowerCase();
        if (letterComp) {
          temL = letterComp;

          i++;
        } else {
          peaces.push(letterComp);
          continue;
        }
      }
    }
    if (temL) peaces.push(temL);
  }

  return peaces;
}

function lookup(elementSymbol) {
  return elements.find((i) => i.symbol.toLowerCase() === elementSymbol);
}
