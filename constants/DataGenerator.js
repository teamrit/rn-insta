import faker from "faker";

export const getRandomBoolean = () => {
    let options = [true,false];
    return options[Math.floor(Math.random()*options.length)];
};

export const getRandomUsername = () => {
  return faker.name.findName().replace(/ /g,'_').toLowerCase();
};

// Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
export function getRandomInt(min, max) {
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
            isStorySeen: getRandomBoolean(),
            avatarUrl: getRandomAvatarUrl()
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
            imageUrl: getRandomPostUrl(),
            caption: getRandomCaption(),
            numberOfComments: getRandomInt(0,1500),
            avatarUrl: getRandomAvatarUrl(),
            timestamp: `${getRandomInt(2,30)} ${getRandomTimeUnit()}s ago`
        }));
};

export const getRandomPost = (index) => {
  return ({
    key: index,
    name: getRandomUsername(),
    isStorySeen: getRandomBoolean(),
    location: getRandomLocationName(),
    imageUrl: getRandomPostUrl(),
    caption: getRandomCaption(),
    numberOfComments: getRandomInt(0,1500),
    avatarUrl: getRandomAvatarUrl(),
    timestamp: `${getRandomInt(2,30)} ${getRandomTimeUnit()}s ago`
  })
};

export const getRandomExplorePosts = () => {
  return new Array(15)
    .fill('0')
    .map((a,index) => ([
      getRandomPost(index*3),
      getRandomPost(index*3+1),
      getRandomPost(index*3+2)
    ]));
};

export function getRandomCaption() {
  return faker.lorem.paragraphs();
}

export function getRandomTimeUnit() {
  let options = ['hour','minute','second'];
  return options[Math.floor(Math.random()*options.length)];
}

export const getRandomLocationName = () => {
    return `${faker.address.city()}, ${faker.address.state()}`;
};

export const getRandomAvatarUrl = () => {
  return `https://api.adorable.io/avatars/400/${faker.name.findName()}@adorable.io.png`;
};

export const getRandomPostUrl = () => {
    const imageSrc = `https://picsum.photos/id/${getRandomInt(1,500)}/500/500`;
    return imageSrc;
};