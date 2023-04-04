export function hasUser() {
    return function (ctx, next) {
        if(!ctx.user) {
            ctx.page.redirect('/login');
        } else {
            next()
        }
    }
}