import fs from 'fs'

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map((row: string): string[] => {
        return row.split(',')
    })

const enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D"
}

const mainTeamIndex = 1
const clientTeamIndex = 2
const resultIndex = 5
let manUnitedWins = 0
matches.forEach(match => {
    if (match[mainTeamIndex] === 'Man United' && match[resultIndex] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[clientTeamIndex] === 'Man United' && match[resultIndex] === MatchResult.AwayWin) {
        manUnitedWins++
    }
})

console.log(`Man United won ${manUnitedWins} games`)
