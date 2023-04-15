import { html } from "../../node_modules/lit-html/lit-html.js";
import { registerRequest } from "../data/users.js";
import { submitHandler } from "../until.js";

const registerTemplate = (onSubmit) => html`<section id="register">
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`;

export function registerView(ctx) {
    ctx.renderSection(registerTemplate(submitHandler(onSubmit)));

    async function onSubmit(dataIn) {
        const rePass = dataIn['re-password'];

        if (dataIn.email == '' || dataIn.password == '') {
            return alert('all field is required');
        }

        if (dataIn.password !== rePass) {
            return alert('password don\'t match');
        }

        const data = await registerRequest(dataIn.email, dataIn.password)
        ctx.page.redirect('/');
    }
}