import faker from "faker";

export const getRandomBoolean = () => {
    let options = [true,false];
    return options[Math.floor(Math.random()*options.length)];
};

export const getRandomStories = () => {
    return new Array(15) // Generates 15 stories
        .fill('0')
        .map((a,index) => ({
            key: index,
            name: faker.name.findName(),
            isStorySeen: getRandomBoolean()
        }))
        .sort(s => {
            // Shows the unseen stories first
            return s.isStorySeen ? 0 : 1
        });
};