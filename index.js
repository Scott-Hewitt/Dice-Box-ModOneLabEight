function rollDice(sides) {
    const roll = Math.floor(Math.random() * sides) + 1;
    document.getElementById('result').textContent = `You rolled a D${sides}: ${roll}`;
}