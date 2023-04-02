export function userSession(userData) {
    return function(ctx, next) {
        const userIn = userData()
        if(userIn) {
            ctx.user = userIn;
        }
        next();
    }
}