"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// 实现 DataReader 接口
const csvFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United', 'report.html');
summary.buildAndPrintReport(matchReader.matches);
