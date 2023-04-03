import { html, nothing } from '../lib.js'
import { removeFruit, getSpecificFruit } from "../data/fruit.js";

const btnTemplate = (isOwner, id, onDelete) => html`${isOwner ? html`
<div id="action-buttons">
    <a href="/edit/${id}" id="edit-btn">Edit</a>
    <a @click=${onDelete} href="" id="delete-btn">Delete</a>
</div > `: nothing}`;

const detailTemplate = (isOwner, content, onDelete) => html`        
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${content.imageUrl}" alt="example1" />
        <p id="details-title">${content.nameFruit}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>${content.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">${content.nutritionDescription}</p>
            </div>
            ${btnTemplate(isOwner, content.objectId, onDelete)}
        </div>
    </div>
</section>`

export async function detailView(ctx) {
    const shoeId = ctx.params.id
    const dataSpecific = await getSpecificFruit(shoeId);
    
    const ownerId = dataSpecific.owner.objectId;
    const users = ctx?.user
    let userId = null;
    if (users) {
        userId = users.objectId;
    }
    
    let hasOwner = false;
    if (ownerId == userId) {
        hasOwner = true;
    }

    ctx.renderSection(detailTemplate(hasOwner, dataSpecific, onDelete));

    async function onDelete(ev) {
        ev.preventDefault()
        const dataAwailt = await removeFruit(shoeId);
        ctx.page.redirect('/catalog');
    }
}