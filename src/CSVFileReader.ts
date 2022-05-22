import fs from "fs";
import {MatchResult} from "./MatchResult";
import {MatchData} from './MatchReader'

// type MatchData = [Date, string, string, number, number, MatchResult, string]

export abstract class CSVFileReader {
    data: MatchData[] = []

    constructor(public fileName: string) {
    }

    abstract mapRow(row: string[]): MatchData

    read(): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
            .map(this.mapRow)
    }
}
