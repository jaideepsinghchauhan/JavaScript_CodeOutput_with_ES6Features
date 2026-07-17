const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file_list.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const fileList = data.split('\n').filter(Boolean); // Split the data by newline and filter out empty lines
    console.log(fileList); // Output the file list
});