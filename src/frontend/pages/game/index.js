import "./index.sass";
import { html } from "sinuous";
import { World } from "../../game/components/world";

export const Game = () => {
    const canvas = html`<canvas class="game"></canvas>`;

    canvas.init = () => {
        const world = World(canvas);
        world.launch();
    }

    return canvas;
};