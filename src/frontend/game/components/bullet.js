export const Bullet = ({from, to, speed}) => {
    const {x, y} = from;
    const v = {x: to.x - x, y: to.y - y};
    const length = Math.hypot(v.x, v.y);
    const vSpeed = {x: v.x * speed / length, y: v.y * speed / length};
    return {
        x,
        y,
        data: {
            speed: vSpeed
        },
        draw(ctx){
            ctx.beginPath();
            ctx.fillStyle = '#000';
            ctx.arc(0, 0, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }
};