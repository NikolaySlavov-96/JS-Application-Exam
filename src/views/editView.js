import { html } from "../lib.js";
import { editSpecificFruit, getSpecificFruit } from "../data/fruit.js";
import { submitHandler } from "../until.js";

const editTemplate = (onSubmit, content) => html` <section id="edit">
  <div class="form">
    <h2>Edit Fruit</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input
        type="text"
        name="nameFruit"
        id="name"
        .value=${content.nameFruit}
        placeholder="Fruit Name"
      />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        .value=${content.imageUrl}
        placeholder="Fruit Image URL"
      />
      <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
        .value=${content.description}
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutritionDescription"
        placeholder="Nutrition"
        rows="10"
        cols="50"
        .value=${content.nutritionDescription}
      ></textarea>
      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editView(ctx) {
  const idShoe = ctx.params.id;
  const dataOpenShoe = await getSpecificFruit(idShoe);

  ctx.renderSection(editTemplate(submitHandler(onSubmit), dataOpenShoe));

  async function onSubmit({ nameFruit, imageUrl, description, nutritionDescription }) {
    if (nameFruit == "" || imageUrl == "" || description == "" || nutritionDescription == "") {
      return alert("all field is required");
    }

    const dataResultShoe = await editSpecificFruit(idShoe, {
      nameFruit,
      imageUrl,
      description,
      nutritionDescription,
    });
    ctx.page.redirect("/catalog/" + idShoe);
  }
}
