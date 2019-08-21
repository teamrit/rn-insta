import faker from "faker";

export const getRandomBoolean = () => {
    let options = [true,false];
    return options[Math.floor(Math.random()*options.length)];
};

export const getRandomUsername = () => {
  return faker.name.findName().replace(/ /g,'_').toLowerCase();
};

// Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomStories = () => {
    return new Array(15) // Generates 15 stories
        .fill('0')
        .map((a,index) => ({
            key: index,
            name: getRandomUsername(),
            isStorySeen: getRandomBoolean()
        }))
        .sort(s => {
            // Shows the unseen stories first
            return s.isStorySeen ? 'a' : 'b'
        });
};

export const getRandomPosts = () => {
    return new Array(15) // Generates 15 stories
        .fill('0')
        .map((a,index) => ({
            key: index,
            name: getRandomUsername(),
            isStorySeen: getRandomBoolean(),
            location: getRandomLocationName(),
            imageUrl: getRandomPostUrl()
        }));
};

export const getRandomLocationName = () => {
    return `${faker.address.city()}, ${faker.address.state()}`;
};

export const getRandomPostUrl = () => {
    const imageSrc = `https://picsum.photos/id/${getRandomInt(1,500)}/500/500`;
    return imageSrc;
};