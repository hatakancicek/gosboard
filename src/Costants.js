export const shapes = {
    CIRCLE: (node, ctx) => { 
        let { x,y,value,expended, color, expendable, id } = node;
        value = value * 10;
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
            ctx.fillStyle = 'rgba(255, 255, 255, .3)';
            ctx.strokeStyle = 'rgba(255, 255, 255, .3)';
            ctx.lineWidth = value * .2;
            ctx.beginPath(); 
            ctx.arc(x, y, value, 0, 2 * Math.PI, false); 
            ctx.stroke();
        }

        drawTextBG(ctx, id, x, y - value * .35, );
    },
};

function drawTextBG(
    ctx, txt, x, y, font = "1.5pt sans-serif",
    textColor = "#FAFAFA", backgroundColor = "rgba(0, 0, 0, .6)"
) {
    /// set font
    ctx.font = font;

    /// draw text from top - makes life easier at the moment
    ctx.textBaseline = 'center';

    /// color for background
    ctx.fillStyle = backgroundColor;

    /// get width of text
    const width = ctx.measureText(txt).width;

    // Center drawing
    const newX = x - width / 2;

    /// draw background rect assuming height of font
    ctx.fillRect(newX - 1, y, width + 2, 3);

    /// text color
    ctx.fillStyle = textColor;

    /// draw text on top
    ctx.fillText(txt, newX, y + 2);
}

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