import { Space } from "canv";
import { Controls } from "../logic/interaction";
import { Bullet } from "./bullet";
import { Map } from "./map";
import { Player } from "./player";

export const World = (canvas) => {
    const space = Space(canvas, {scale: 2, animationTick: (ts) => {
        space.objects.forEach(el => {
            if(el.data?.speed) {
                el.position.center.x += el.data.speed.x;
                el.position.center.y += el.data.speed.y;
            }
        })
    }});

    const map = space.addDrawable(Map());
    const player = space.addDrawable(Player());

    Controls(player);

    space.draw();

    return space;
};