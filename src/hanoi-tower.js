module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let steps = Math.pow(2,disksNumber);
    return {turns: steps, seconds: steps/(turnsSpeed/3600)};
}