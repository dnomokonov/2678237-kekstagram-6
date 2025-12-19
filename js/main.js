import { generatePosts } from './modules/data/data.js';
import { COUNT_POSTS } from './modules/data/constants.js';
import { initGallery } from './modules/gallery/gallery.js';
import { initForm } from './modules/form/form.js';

const posts = generatePosts(COUNT_POSTS);

initGallery(posts);
initForm();
