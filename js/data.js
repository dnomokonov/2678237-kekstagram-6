import { getRandom, getRandomName, getRandomMessage } from './util.js';
import { NAMES, MESSAGES, DESCRIPTION } from './constants.js';

const MIN_AVATAR_INDEX = 1;
const MAX_AVATAR_INDEX = 6;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

function generatePosts(countPosts) {
  const posts = [];
  for (let i = 1; i <= countPosts; i++) {
    const post = {
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTION[getRandom(0, DESCRIPTION.length)],
      likes: getRandom(MIN_LIKES, MAX_LIKES),
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
    const randomAvatarIndex = getRandom(MIN_AVATAR_INDEX, MAX_AVATAR_INDEX);
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

export { generatePosts };
