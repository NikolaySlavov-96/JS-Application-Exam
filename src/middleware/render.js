import { render } from "../../node_modules/lit-html/lit-html.js";


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