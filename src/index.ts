import {CSVFileReader} from "./CSVFileReader";
import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";

// 实现 DataReader 接口
const csvFileReader = new CSVFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = Summary.winsAnalysisWithHtmlReport('Man United','report.html')
summary.buildAndPrintReport(matchReader.matches)
