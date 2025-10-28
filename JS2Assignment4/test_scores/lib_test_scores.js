"use strict";

class TestScores {
    constructor() {
        this.#scores = [];
    }

    #scores;

    add(score) {
        this.#scores.push(score);
    }

    get avg() {
        if (this.#scores.length === 0) return 0;
        const sum = this.#scores.reduce((total, elem) => total + elem, 0);
        return sum / this.#scores.length;
    }

    toString() {
        return this.#scores.join(", ");
    }


    toLetterString() {
        return this.#scores.map(score => {
            if (score >= 90) return "A";
            if (score >= 80) return "B";
            if (score >= 70) return "C";
            if (score >= 60) return "D";
            return "F";
        }).join(", ");
    }

    toSortedString() {
        const sortedScores = this.#scores.slice();
        sortedScores.sort((a, b) => b - a);
        return sortedScores.join(", ");
    }
}