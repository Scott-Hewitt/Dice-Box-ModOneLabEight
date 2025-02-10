// rollDice function
function rollDice(sides) {
    const roll = Math.floor(Math.random() * sides) + 1;
    return roll;
}


function mockMathRandom(value) {
    Math.random = () => value;
}

function resetMathRandom() {
    Math.random = originalMathRandom;
}


const originalMathRandom = Math.random;

// Unit Tests
function testRollDiceWithinBounds() {
    mockMathRandom(0);
    const result = rollDice(6);
    if (result !== 1) {
        console.error(`Test failed: expected 1, got ${result}`);
    } else {
        console.log("Test passed: RollDiceWithinBounds");
    }
    resetMathRandom();
}

function testRollDiceMaxValue() {
    mockMathRandom(0.999);
    const result = rollDice(6);
    if (result !== 6) {
        console.error(`Test failed: expected 6, got ${result}`);
    } else {
        console.log("Test passed: RollDiceMaxValue");
    }
    resetMathRandom();
}

function testRollDiceDifferentSizes() {
    mockMathRandom(0.5);
    const result = rollDice(10);
    if (result !== 6) {
        console.error(`Test failed: expected 6, got ${result}`);
    } else {
        console.log("Test passed: RollDiceDifferentSizes");
    }
    resetMathRandom();
}

// Run Tests
testRollDiceWithinBounds();
testRollDiceMaxValue();
testRollDiceDifferentSizes();