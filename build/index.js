"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
const mainTeamIndex = 1;
const clientTeamIndex = 2;
const resultIndex = 5;
let manUnitedWins = 0;
matches.forEach(match => {
    if (match[mainTeamIndex] === 'Man United' && match[resultIndex] === "H" /* HomeWin */) {
        manUnitedWins++;
    }
    else if (match[clientTeamIndex] === 'Man United' && match[resultIndex] === "A" /* AwayWin */) {
        manUnitedWins++;
    }
});
console.log(`Man United won ${manUnitedWins} games`);
