import { getRandom } from './util.js';
import { NAMES, MESSAGES, DESCRIPTION } from './constants.js';

const minAvatarIndex = 1;
const maxAvatarIndex = 6;

const minLikes = 15;
const maxLikes = 200;

function generatePosts(countPosts) {
  const posts = [];
  for (let i = 1; i <= countPosts; i++) {
    const post = {
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTION[getRandom(0, DESCRIPTION.length)],
      likes: getRandom(minLikes, maxLikes),
      comments: generateComments(NAMES, MESSAGES),
    };
    posts.push(post);
  }

  return posts;
}

function generateComments(names, messages, count = 30) {
  const comments = [];
  const countComments = getRandom(0, count);
  for (let i = 0; i < countComments; i++) {
    const randomAvatarIndex = getRandom(minAvatarIndex, maxAvatarIndex);
    const comment = {
      id: i,
      avatar: `img/avatar-${randomAvatarIndex}.svg`,
      message: getRandomMessage(messages),
      name: getRandomName(names),
    };
    comments.push(comment);
  }

  return comments;
}

function getRandomName(names) {
  const randomNameIndex = Math.floor(Math.random() * names.length);
  return names[randomNameIndex];
}

function getRandomMessage(messages, count = 2) {
  const countMessage = Math.floor(Math.random() * count) + 1;
  let message = '';
  for (let i = 0; i < countMessage; i++) {
    const randomMessageIndex = getRandom(0, messages.length);
    message += `${messages[randomMessageIndex]}`;
  }
  return message;
}

export { generatePosts };
