import {MatchData} from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutPutTarget {
    print(report: string): void
}

export class Summary {
    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutPutTarget) {
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }
}

