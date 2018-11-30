import Config from '../Config';

// Method for converting hex to rgb.
const hexToRgb = hex => {

    // Check if result fits hex format.
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : // For default, return black. 
    {
        r: parseInt(0),
        g: parseInt(0),
        b: parseInt(0)
    };
};

const drawTextBG = (
    ctx, txt, x, y, font = "1.5pt sans-serif",
    textColor = "#FAFAFA", backgroundColor = "rgba(0, 0, 0, .6)"
) => {
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
};

export default {
    // Default method for drawing nodes.
    CIRCLE: (node, ctx) => { 
        let { x,y,value,expended, 
            color, expendable, id, 
            opacity, manager, parent, 
            name,
        } = node;
        value = value * Config.nodeMagnify;

        // If manager doesn't have a highlight
        // node, the opacity of the node is
        // its original opacity.
        if(manager.state.highlightNode && manager.state.highlightNodes) {

            // If node is the highlighted node,
            // its opacity is set to 1.
            if(manager.state.highlightNode === id) {
                opacity = 1;
                value = value * Config.increaseSelected;
            }

            // Else if node is connected to the highlighted node,
            // it is half shaded.
            else if(manager.state.highlightNodes.includes(id))
                opacity = Config.halfShadeOpacity;

            // Else if node is connected to the highlighted node,
            // it is half shaded.
            else if(parent && parent.includes(manager.state.highlightNode))
                opacity = Config.halfShadeOpacity * .5;

            // Else the node is made shady.
            else 
                opacity = Config.fullShadeOpacity;
        };

        // Update color according to opacity.
        const { r, g, b, } = hexToRgb(color);
        color = `rgba(${r}, ${g}, ${b}, ${opacity || 1})`;

        // If node is not expendable render a small hole inside of it.
        if(!expendable){
            ctx.fillStyle = color;
            ctx.beginPath(); 

            // Make it bigger if selected.
            ctx.arc(x, y, value, 0, 2 * Math.PI, false); 
            ctx.fill();
            ctx.fillStyle = "#263238";
            ctx.beginPath(); 

            // Make it bigger if selected.
            ctx.arc(x, y, value * .5, 0, 2 * Math.PI, false); 
            ctx.fill();
        }

        // If not is not expended, render a full circle.
        else if(!expended) {
            ctx.fillStyle = color;
            ctx.beginPath(); 

            // Make it bigger if selected.
            ctx.arc(x, y, value, 0, 2 * Math.PI, false); 
            ctx.fill();
        } 
        
        // If node is expended, render a bigger hole.
        else {
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.lineWidth = value * .2;
            ctx.beginPath(); 

            // Make it bigger if selected.
            ctx.arc(x, y, value, 0, 2 * Math.PI, false); 
            ctx.stroke();
        }

        // If the node is not shaded, draw its name on canvas.
        if(opacity !== Config.fullShadeOpacity)
            drawTextBG(ctx, name || id, x, y - value * .35, );
    },
};