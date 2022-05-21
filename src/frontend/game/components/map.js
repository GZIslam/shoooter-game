export const Map = () => {
    return {
        x: 0,
        y: 0,
        draw(ctx){
            ctx.beginPath();
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.rect(-100, -100, 200, 200);
            ctx.stroke();
            ctx.closePath();
        }
    }
};