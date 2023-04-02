import { html } from "../../node_modules/lit-html/lit-html.js";
import { editSpecificShoe, getSpecificShoe } from "../data/mate.js";
import { submitHandler } from "../until.js";


const editTemplate = (onSubmit, content) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                .value=${content.name}
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
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value=${content.nutrition}
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>`;

export async function editView(ctx) {
    const idShoe = ctx.params.id;
    const dataOpenShoe = await getSpecificShoe(idShoe)

    ctx.renderSection(editTemplate(submitHandler(onSubmit), dataOpenShoe));

    async function onSubmit({ name, imageUrl, description, nutrition }) {
        if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
            return alert('all field is required')
        }

        const dataResultShoe = await editSpecificShoe(idShoe, { name, imageUrl, description, nutrition });
        ctx.page.redirect('/catalog/' + idShoe);
    }
}

