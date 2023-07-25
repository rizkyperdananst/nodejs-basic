const fs = require('fs');
// Teknik membaca berkas

const readableStream = fs.createReadStream('readable-stream/article.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});

readableStream.on('end', () => {
    console.log('Done');
});