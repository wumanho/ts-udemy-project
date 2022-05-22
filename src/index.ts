import {CSVFileReader} from "./CSVFileReader";
import {MatchResult} from "./MatchResult";


const reader = new CSVFileReader('football.csv')
reader.read()

const mainTeamIndex = 1
const clientTeamIndex = 2
const resultIndex = 5
let manUnitedWins = 0

const dateOfFirstMatch = reader.data[0][0]

reader.data.forEach(match => {
    if (match[mainTeamIndex] === 'Man United' && match[resultIndex] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[clientTeamIndex] === 'Man United' && match[resultIndex] === MatchResult.AwayWin) {
        manUnitedWins++
    }
})

console.log(`Man United won ${manUnitedWins} games ${new Date()}`)
