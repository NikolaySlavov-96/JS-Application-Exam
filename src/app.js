import page from '../node_modules/page/page.mjs';
import { userSession } from './middleware/addSession.js';
import { createRender } from './middleware/render.js';
import { navShows } from './middleware/userNav.js';
import { getUserData } from './until.js';
import { createView } from './views/createView.js';
import { dashboardView } from './views/dashboardView.js';
import { detailView } from './views/detailView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutFn } from './views/logout.js';
import { navTemplate } from './views/navBar.js';
import { registerView } from './views/registerView.js';
import { searchView } from './views/searchView.js';

const nav = document.querySelector('#wrapper header nav');
const main = document.querySelector('#wrapper main');

page(createRender(nav, main));
page(userSession(getUserData));
page(navShows(navTemplate));

page('/', homeView);
page('/catalog', dashboardView);
page('/catalog/:id', detailView);
page('/edit/:id', editView)
page('/search', searchView);
page('/create', createView);
page('/logout', logoutFn);
page('/login', loginView);
page('/register', registerView);

page.start();