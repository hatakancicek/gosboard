export const shapes = {
    RECTANGLE: ({ x, y, value, expended, color }, ctx) => 
        { ctx.fillStyle= color; ctx.fillRect(x - value/2, y - value/2, value, value); },
    TRIANGLE: ({ x, y, value, expended, color }, ctx) => 
    { ctx.fillStyle= color; ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x - 5, y + 5); ctx.lineTo(x + 5, y + 5); ctx.fill(); },
    CIRCLE: ({ x, y, value, expended, color }, ctx) => { 
        if(!expended) {
            ctx.fillStyle = color;
            ctx.beginPath(); 
            ctx.arc(x, y, value, 0, 2 * Math.PI, false); 
            ctx.fill();
        } else {
            ctx.strokeStyle = color;
            ctx.lineWidth = value * .2;
            ctx.beginPath(); 
            ctx.arc(x, y, value, 0, 2 * Math.PI, false); 
            ctx.stroke();
        }
    },
    TEXT: ({ x, y, value, expended, color }, ctx) => { ctx.font = '10px Sans-Serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('Text', x, y); },
};

const Constants = {
    shapes,
};

export default Constants;