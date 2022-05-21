export const Player = () => {
    return {
        x: 0,
        y: 0,
        draw(ctx){
            ctx.beginPath();
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.arc(0, 0, 10, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
        }
    }
};