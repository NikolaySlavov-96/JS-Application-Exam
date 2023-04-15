import { html } from "../../node_modules/lit-html/lit-html.js";

export const navTemplate = (hasUser) => html`
    <div>
        <a href="/catalog">Fruits</a>
        <a href="/search">Search</a>
    </div>
    ${hasUser ?
        html`<div class="user">
        <a href="/create">Add Fruit</a>
        <a href="/logout">Logout</a>
    </div>` :
        html`<div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>

    </div>`}`;


