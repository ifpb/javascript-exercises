function withdraw(money) {
  let minBanknotes = [];
  let banknotes = [100, 50, 20, 10, 5, 2, 1];
  for (const banknote of banknotes) {
    const count = parseInt(money / banknote);
    if (count) {
      minBanknotes.push([banknote, count]);
    }
    money -= count * banknote;
  }
  return minBanknotes;
}

export { withdraw };
