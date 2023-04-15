import { logoutRequest } from "../data/users.js";
import { removeUserData } from "../until.js"

export function logoutFn(ctx) {
    const data = logoutRequest();
    removeUserData();
    ctx.page.redirect('/');
    return data;
}