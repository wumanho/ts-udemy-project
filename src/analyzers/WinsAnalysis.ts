import {Analyzer} from "../Summary";
import {MatchData} from "../MatchData";
import {MatchResult} from "../MatchResult";

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {
    }

    run(matches: MatchData[]): string {
        const mainTeamIndex = 1
        const clientTeamIndex = 2
        const resultIndex = 5
        let wins = 0

        matches.forEach(match => {
            if (match[mainTeamIndex] === this.team && match[resultIndex] === MatchResult.HomeWin) {
                wins++
            } else if (match[clientTeamIndex] === this.team && match[resultIndex] === MatchResult.AwayWin) {
                wins++
            }
        })
        return `Team ${this.team} won ${wins} games`
    }
}
