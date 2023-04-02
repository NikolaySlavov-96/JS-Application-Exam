import { render } from "../lib.js";


export function createRender(nav, section) {
    return function(ctx, next) {
        ctx.renderNav = createNavRender;
        ctx.renderSection = createSectionRender;
        next()
    }

    function createNavRender(content) {
        render(content, nav)
    }
    function createSectionRender(content) {
        render(content, section)
    }
}