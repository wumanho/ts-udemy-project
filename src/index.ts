import {CSVFileReader} from "./CSVFileReader";


const reader = new CSVFileReader('football.csv')
reader.read()

const enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D",
}

const mainTeamIndex = 1
const clientTeamIndex = 2
const resultIndex = 5
let manUnitedWins = 0

reader.data.forEach(match => {
    if (match[mainTeamIndex] === 'Man United' && match[resultIndex] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[clientTeamIndex] === 'Man United' && match[resultIndex] === MatchResult.AwayWin) {
        manUnitedWins++
    }
})

console.log(`Man United won ${manUnitedWins} games ${new Date()}`)
