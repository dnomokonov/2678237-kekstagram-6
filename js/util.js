function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateComments(names, messages, count = 30) {
  const comments = [];
  const countComments = getRandom(0, count);
  for (let i = 0; i < countComments; i++) {
    const randomAvatarIndex = getRandom(0, 6);
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

export { getRandom, generateComments };
