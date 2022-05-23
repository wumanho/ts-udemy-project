import {OutPutTarget} from "../Summary";
import fs from 'fs'

export class HTMLReport implements OutPutTarget {
    constructor(public outputPath: string) {
    }

    print(report: string) {
        const html = `
           <div>
            <h1>Analysis Report</h1>
            <div>${report}</div>
           </div>
        `
        fs.writeFileSync(this.outputPath, html)
    }
}
