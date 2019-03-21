function substitution(message, plaintext, ciphertext) {
  plaintext = plaintext.split('');
  ciphertext = ciphertext.split('');
  const substitution = {};

  plaintext.forEach((char, index) => {
    substitution[char] = ciphertext[index];
  });

  return message
    .split('')
    .map(char => substitution[char] || char)
    .join('');
}

export { substitution };
