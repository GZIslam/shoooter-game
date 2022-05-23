import { Space } from "canv";
import { Controls } from "../logic/interaction";
import { Bullet } from "./bullet";
import { Map } from "./map";
import { Player } from "./player";

export const World = (canvas) => {
    let prevTs;
    const space = Space(canvas, {scale: 2, animationTick: function (ts) {
        if(prevTs) {
            const dt = (ts - prevTs) / 10;
            space.objects.forEach(el => {
                if(el.data?.speed) {
                    el.position.center.x += el.data.speed.x * dt;
                    el.position.center.y += el.data.speed.y * dt;
                }
            })
        };
        prevTs = ts;
    }});

    const map = space.addDrawable(Map());
    const player = space.addDrawable(Player());

    Controls(player);

    space.draw();

    return space;
};