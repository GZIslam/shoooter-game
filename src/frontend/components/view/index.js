import { html, o } from "sinuous"
import "./index.sass"

export const View = () => {
    const content = o(null);
    const element = html`<div class="view">
        ${content}
    </div>`;

    element.setContent = (el) => content(el);

    return element;
}


/* 
signin
signup
    success
    mail send
home
game
profile
shop
*/