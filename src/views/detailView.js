import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { dellShoe, getSpecificShoe } from "../data/mate.js";

const btnTemplate = (isOwner, id, onDelete) => html`${isOwner ? html`
<div id="action-buttons">
    <a href="/edit/${id}" id="edit-btn">Edit</a>
    <a @click=${onDelete} href="" id="delete-btn">Delete</a>
</div > `: nothing}`;

const detailTemplate = (isOwner, content, onDelete) => html`        
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${content.imageUrl}" alt="example1" />
        <p id="details-title">${content.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>${content.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">${content.nutrition}</p>
            </div>
            ${btnTemplate(isOwner, content._id, onDelete)}
        </div>
    </div>
</section>`

export async function detailView(ctx) {
    const shoeId = ctx.params.id
    const dataSpecific = await getSpecificShoe(shoeId);

    console.log(dataSpecific.description)

    const ownerId = dataSpecific._ownerId;
    const users = ctx?.user
    let userId = null;
    if (users) {
        userId = users.id;
    }

    let hasOwner = false;
    if (ownerId == userId) {
        hasOwner = true;
    }

    ctx.renderSection(detailTemplate(hasOwner, dataSpecific, onDelete));

    async function onDelete(ev) {
        ev.preventDefault()
        const dataAwailt = await dellShoe(shoeId);
        ctx.page.redirect('/catalog');
    }
}