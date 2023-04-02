import { html } from "../../node_modules/lit-html/lit-html.js";
import { addNewShoe } from "../data/mate.js";
import { submitHandler } from "../until.js";


const createTemplate = (onSubmit) => html`
<section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form @submit=${onSubmit} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
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
                name="nutrition"
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

    async function onSubmit({ name, imageUrl, description, nutrition } ) {

        if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
            return alert('all field is required')
        }

        const dataResultShoe = await addNewShoe({ name, imageUrl, description, nutrition } );
        ctx.page.redirect('/catalog');
    }
}



