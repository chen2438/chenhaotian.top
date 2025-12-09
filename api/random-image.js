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

module.exports = (req, res) => {
    const minGroup = 0;
    const maxGroup = imageGroups.length - 1;
    const randomGroup = Math.floor(Math.random() * (maxGroup - minGroup + 1)) + minGroup;
    const minIndex = 1;
    const maxIndex = imageGroups[randomGroup].quantity;
    const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
    const picpath = `https://storage.opennet.top/directlink/local/img/cover/${imageGroups[randomGroup].keyword}/img%20%28${randomIndex}%29.webp`;
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Location', picpath);
    res.status(302).end();
};
