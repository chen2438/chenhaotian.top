const http = require('http');

class ImageGroup {
    constructor(keyword, quantity) {
        this.keyword = keyword;
        this.quantity = quantity;
    }
}

const imageGroups = [
    new ImageGroup("nier", 15),
    new ImageGroup("battlefield", 13),
    new ImageGroup("assassin", 14),
    new ImageGroup("titanfall", 20),
    new ImageGroup("cyberpunk", 13),
];

const server = http.createServer((req, res) => {
    const minGroup = 0;
    const maxGroup = imageGroups.length - 1;
    const randomGroup = Math.floor(Math.random() * (maxGroup - minGroup + 1)) + minGroup;
    const minIndex = 1;
    const maxIndex = imageGroups[randomGroup].quantity;
    const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
    // http://storage.opennet.top:8080/directlink/local/img/cover/nier/img%20%281%29.jpg
    const picpath = `http://storage.opennet.top:8080/directlink/local/img/cover/${imageGroups[randomGroup].keyword}/img%20%28${randomIndex}%29.jpg`;
    res.writeHead(302, { 'Location': picpath });
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});