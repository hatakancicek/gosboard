export const shapes = {
    RECTANGLE: ({ x, y, value, expended, color }, ctx) => 
        { ctx.fillStyle= color; ctx.fillRect(x - value/2, y - value/2, value, value); },
    TRIANGLE: ({ x, y, value, expended, color }, ctx) => 
    { ctx.fillStyle= color; ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x - 5, y + 5); ctx.lineTo(x + 5, y + 5); ctx.fill(); },
    CIRCLE: ({ x, y, value, expended, color, expendable }, ctx) => { 
        value = value * 10
        if(!expendable){
            ctx.strokeStyle = color;
            ctx.lineWidth = value * .95;
            ctx.beginPath(); 
            ctx.arc(x, y, value, 0, 2 * Math.PI, false); 
            ctx.stroke();
        }
        else if(!expended) {
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

export const links = {
    child: {
        color: '#90A4AE',
        arrowLength: 0,
        particles: 0,
        width: .3,
    },
    connection: {
        color: '#FAFAFA',
        particles: 3,
        arrowLength: 2,
        width: 1,
        curvature: -.5
    }
}

const Constants = {
    shapes,
    links,
};

export default Constants;