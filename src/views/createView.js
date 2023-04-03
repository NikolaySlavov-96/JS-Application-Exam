import { html } from "../lib.js";
import { addNewFruit } from "../data/fruit.js";
import { submitHandler } from "../until.js";

const createTemplate = (onSubmit) => html` <section id="create">
  <div class="form">
    <h2>Add Fruit</h2>
    <form @submit=${onSubmit} class="create-form">
      <input type="text" name="nameFruit" id="name" placeholder="Fruit Name" />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image"
      />
      <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutritionDescription"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fruit</button>
    </form>
  </div>
</section>`;

export function createView(ctx) {
  ctx.renderSection(createTemplate(submitHandler(onSubmit)));

  async function onSubmit({ nameFruit, imageUrl, description, nutritionDescription }) {
    if (nameFruit == "" || imageUrl == "" || description == "" || nutritionDescription == "") {
      return alert("all field is required");
    }
    const userId = ctx.user.objectId
    const dataResultShoe = await addNewFruit({
      nameFruit,
      imageUrl,
      description,
      nutritionDescription,
    }, userId);
    ctx.page.redirect("/catalog");
  }
}
