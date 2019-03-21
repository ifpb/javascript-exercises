function citation(name) {
  let result = '';
  let words = name.split(' ');
  let lastWord = words.pop();
  lastWord = lastWord.toUpperCase();
  words = words.join(' ');
  result = `${lastWord}; ${words}`;
  return result;
}

function compactCitation(name) {
  let result = '';
  let words = name.split(' ');
  let lastWord = words.pop();
  lastWord = lastWord.toUpperCase();
  // for(let index in words){
  //   words[index] = `${words[index][0].toUpperCase()}.`
  // }
  words = words.map(word => `${word[0].toUpperCase()}.`);
  words = words.join(' ');
  result = `${lastWord}; ${words}`;
  return result;
}

export { citation, compactCitation };
