"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const MatchReader_1 = require("./MatchReader");
// 实现 DataReader 接口
const csvFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const mainTeamIndex = 1;
const clientTeamIndex = 2;
const resultIndex = 5;
let manUnitedWins = 0;
matchReader.matches.forEach(match => {
    if (match[mainTeamIndex] === 'Man United' && match[resultIndex] === "H" /* HomeWin */) {
        manUnitedWins++;
    }
    else if (match[clientTeamIndex] === 'Man United' && match[resultIndex] === "A" /* AwayWin */) {
        manUnitedWins++;
    }
});
console.log(`Man United won ${manUnitedWins} games ${new Date()}`);
