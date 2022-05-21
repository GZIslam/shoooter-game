import { Space } from "canv";
import { Controls } from "../logic/interaction";
import { Bullet } from "./bullet";
import { Map } from "./map";
import { Player } from "./player";

export const World = (canvas) => {
    const space = Space(canvas, {});

    const map = space.addDrawable(Map());
    const player = space.addDrawable(Player());

    Controls(player);
    
    space.draw();

    return space;
};