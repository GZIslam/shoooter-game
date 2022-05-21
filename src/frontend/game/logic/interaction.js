import { Bullet } from "../components/bullet";

const speed = 2.5;
const bulletSpeed = 5;

const keyPressed = ({code, player, down}) => {
    switch (code) {
        case "KeyW":
            player.data.speed.y = down ? -speed : 0;
            break;
        case "KeyS":
            player.data.speed.y = down ? speed : 0;
            break;
        case "KeyA":
            player.data.speed.x = down ? -speed : 0;
            break;
        case "KeyD":
            player.data.speed.x = down ? speed : 0;
            break;
    }
}

const clickEvent = ({x, y, space, player}) => {
    space.addDrawable(Bullet({from: player.position.center, to: space.transform({x, y}), speed: bulletSpeed}));
};

export const Controls = (player) => {
    const space = player.getSpace();
    const canvas = space.canvas;

    window.addEventListener("keydown", (e) => {
        keyPressed({code: e.code, down: true, player});
        // space.draw();
    });

    window.addEventListener("keyup", (e) => {
        keyPressed({code: e.code, down: false, player});
        // space.draw();
    });

    canvas.addEventListener("click", (e) => {
        clickEvent({x: e.offsetX, y: e.offsetY, space, player});
    })
};