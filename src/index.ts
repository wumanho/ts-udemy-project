import {MatchResult} from "./MatchResult";
import {CSVFileReader} from "./CSVFileReader";
import {MatchReader} from "./MatchReader";

// 实现 DataReader 接口
const csvFileReader = new CSVFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const mainTeamIndex = 1
const clientTeamIndex = 2
const resultIndex = 5
let manUnitedWins = 0

matchReader.matches.forEach(match => {
    if (match[mainTeamIndex] === 'Man United' && match[resultIndex] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[clientTeamIndex] === 'Man United' && match[resultIndex] === MatchResult.AwayWin) {
        manUnitedWins++
    }
})

console.log(`Man United won ${manUnitedWins} games ${new Date()}`)
