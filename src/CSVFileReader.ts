import fs from "fs";

/**
 * 用于读取 CSV 文件的通用类
 */
export class CSVFileReader {
    data: string[][] = []

    constructor(public fileName: string) {
    }

    read(): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
    }
}
