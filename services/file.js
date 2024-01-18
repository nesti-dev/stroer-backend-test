const fs = require('fs');


class FileService {
    constructor(filename) {
        this.filename = filename;
    }

    save(data) {
        fs.appendFileSync(this.filename, JSON.stringify(data) + '\n');
    }
}


module.exports = FileService;
