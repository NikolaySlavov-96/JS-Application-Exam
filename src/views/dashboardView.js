import { html, repeat } from "../lib.js";
import { getAllFruits } from "../data/fruit.js";

const cardShoe = (contet) => html` <div class="fruit">
  <img src="${contet.imageUrl}" />
  <h3 class="title">${contet.name}</h3>
  <p class="description">${contet.description}</p>
  <a class="details-btn" href="/catalog/${contet.objectId}">More Info</a>
</div>`;

const dashboardTemplate = (isState, data) => html` <h2>Fruits</h2>
  ${isState
    ? html` <section id="dashboard">
        ${repeat(data, (el) => el._id, cardShoe)}
      </section>`
    : html`<h2>No fruit info yet.</h2>`}`;

export async function dashboardView(ctx) {
  let isShoe = true;
  const dataShoe = await getAllFruits();

  const allFruitArray = dataShoe.results

  if (allFruitArray.length == 0) {
    isShoe = false;
  }

  ctx.renderSection(dashboardTemplate(isShoe, allFruitArray));
}