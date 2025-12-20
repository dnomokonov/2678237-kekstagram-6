import ErrorApi from './errorApi.js';

const SERVER_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';

const getPosts = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/data`);
    if (!response.ok) {
      throw new ErrorApi(`Ошибка сервера: ${response.status}`, response.status);
    }
    return response.json();
  } catch (e) {
    throw new ErrorApi('Ошибка загрузки постов', null);
  }
};

const sendNewPost = async (formData) => {
  try {
    const response = await fetch(`${SERVER_URL}`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new ErrorApi(`Ошибка сервера: ${response.status}`, response.status);
    }
    return response.json();
  } catch (e) {
    throw new ErrorApi(`Не удалось отправить данные: ${e.message}`, null);
  }
};

const sendForm = async (formData) => {
  return sendNewPost(formData);
};

export { getPosts, sendForm };
