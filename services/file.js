require('dotenv').config()

const fs = require('fs');


DATA_FILENAME = process.env.DATA_FILENAME || 'data.json'


class FileService {
    constructor() {
        this.filename = DATA_FILENAME;
    }

    save(data) {
        fs.appendFileSync(this.filename, JSON.stringify(data) + '\n');
    }
}


module.exports = FileService;
