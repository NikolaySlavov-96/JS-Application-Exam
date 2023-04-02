import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { repeat } from "../../node_modules/lit-html/directives/repeat.js";
import { getAllShoes } from "../data/mate.js";

const cardShoe = (contet) => html`
<div class="fruit">
            <img src="${contet.imageUrl}" />
            <h3 class="title">${contet.name}</h3>
            <p class="description">${contet.description}</p>
            <a class="details-btn" href="/catalog/${contet._id}">More Info</a>
</div>`;

const dashboardTemplate = (isState, data) => html`
<h2>Fruits</h2>
    ${isState ? html`
    <section id="dashboard">
            ${repeat(data, el => el._id, cardShoe)}
        </section>` :
html`<h2>No fruit info yet.</h2>`}`;

export async function dashboardView(ctx) {
    let isShoe = true;
    const dataShoe = await getAllShoes();

    if (dataShoe.length == 0) {
        isShoe = false;
    }

    ctx.renderSection(dashboardTemplate(isShoe, dataShoe));
}