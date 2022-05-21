const speed = 10;

const keyPressed = (code, player) => {
    switch (code) {
        case "KeyW":
            player.position.center.y -= speed;
            break;
        case "KeyS":
            player.position.center.y += speed;
            break;
        case "KeyA":
            player.position.center.x -= speed;
            break;
        case "KeyD":
            player.position.center.x += speed;
            break;
    }
}

export const Controls = (player) => {
    const space = player.getSpace();

    window.addEventListener("keypress", (e) => {
        keyPressed(e.code, player);
        space.draw();
    });
};