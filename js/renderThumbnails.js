const pictures = document.querySelector('.pictures');
const templatePictureFragment = document.querySelector('#picture').content;
const templatePicture = templatePictureFragment.querySelector('.picture');
const fragment = document.createDocumentFragment();

const renderThumbnails = function(posts, openFullThumbnail) {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const thumbnail = templatePicture.cloneNode(true);
    const img = thumbnail.children[0];
    const info = thumbnail.children[1];
    const countComments = info.children[0];
    const pictureLikes = info.children[1];

    thumbnail.id = post.id;
    img.src = post.url;
    countComments.textContent = (post.comments).length;
    pictureLikes.textContent = post.likes;

    openFullThumbnail(thumbnail, post);

    fragment.appendChild(thumbnail);
  }

  pictures.appendChild(fragment);
};

export { renderThumbnails };
