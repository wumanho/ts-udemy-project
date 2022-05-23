"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        const mainTeamIndex = 1;
        const clientTeamIndex = 2;
        const resultIndex = 5;
        let wins = 0;
        matches.forEach(match => {
            if (match[mainTeamIndex] === this.team && match[resultIndex] === "H" /* HomeWin */) {
                wins++;
            }
            else if (match[clientTeamIndex] === this.team && match[resultIndex] === "A" /* AwayWin */) {
                wins++;
            }
        });
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
