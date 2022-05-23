import {CSVFileReader} from "./CSVFileReader";
import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {ConsoleReport} from "./reportTarget/ConsoleReport";

// 实现 DataReader 接口
const csvFileReader = new CSVFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
)

summary.buildAndPrintReport(matchReader.matches)
