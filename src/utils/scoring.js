export function getResult(quiz, chosenAnswers) {
    const totals = {};
    for (const answer of chosenAnswers) {
        for (const [result, points] of Object.entries(answer.scores)) {
            if (totals[result] === undefined) {
                totals[result] = 0;
            }
            totals[result] = totals[result] + points;
        }
    }

    const pairs = Object.entries(totals);
    const sorted = pairs.sort((a, b) => b[1] - a[1])
    const [resultName, resultScore] = sorted[0];
    return resultName;
}