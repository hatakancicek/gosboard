import { links, shapes } from './Costants';

const DEFAULT_SHAPE = shapes.CIRCLE,
      DEFAULT_INNER = { nodes: [], links: [] },
      DEFAULT_PARENT = [];

const { child, connection } = links;

// Checks if the node has any links or nodes. A node should 
// never have links without nodes.
const isExpendable = inner => inner && inner.nodes && inner.nodes.length;

// Returns default value if attribute is empty.
const secureInner = inner => inner || DEFAULT_INNER;
const secureParent = parent => parent || DEFAULT_PARENT;
const secureShape = shape => shape || DEFAULT_SHAPE;

const pathToNode = ({ id, inner }, target, currentPath) => {
  const targetPath = [ ...currentPath, id ];
  if(target === id) return targetPath;
  if(!inner || !inner.nodes || !inner.nodes.length) return currentPath;

  const { nodes } = inner;

  for(let i = 0; i < nodes.length; i++) {
    const temp = nodes[i];
    const path = pathToNode(temp, target, targetPath);
    if(path.length > targetPath.length) return path;
  }

  return currentPath;
}

const getRenderedParentOfNode = (nodes, target) => {
  let path = pathToNode(nodes[0], target, []).reverse();

  for(let i = 0; i < path.length; i++) {
    const currentNodeID = path[i];
    for(let j = 0; j < nodes.length; j++) {
      const { id } = nodes[j];
      if( currentNodeID === id ) {
        return currentNodeID;
      };
    };
  }

  return target;
}

const generateConnection = (kid, nodes) => {
  const { target, source } = kid;
  
  let renderedTarget, renderedSource;

  for(let i = 0; i < nodes.length; i++) {
    const { id } = nodes[i];

    if( id === target ) {
      renderedTarget = id;
      if ( renderedSource ) break;
    };

    if( id === source ) {
      renderedSource = id;
      if ( renderedTarget ) break;
    };
  };

  return {
    ...connection,
    ...kid,
    target: renderedTarget || getRenderedParentOfNode(nodes, target),
    source: renderedSource || getRenderedParentOfNode(nodes, source)
  };
};

// This function adds or removes the links and nodes 
// based on the state of expended value and links and
// nodes under the parent's inner attribute.
// Do not touch 'this' if you do not understand 'this'.
// 'node' refers to the parent, to whom this method 
// belongs to which is 'this'. Use arrow functions inside
// toggle method for not affecting the value of 'this'.
function toggle() {
    const { expended, inner, id, expendable, component } = this;
    const { Node } = component;

    //If the node is not expendable simply do nothing.
    if(!expendable) return;
    const { nodes, links } = component.state;

    // Change expended state of node
    this.expended = !expended;

    let newNodes, newLinks;
    
    if(expended) {

      // If expended shrink it.
      // For shrinking a node, remove nodes and links which has the 
      // node's id in their parent array.
      newNodes = nodes.filter(node => !node.parent.includes(id));
      newLinks = [ ...nodes[0].inner.links
        .map(kid => generateConnection({
          ...kid,
        }, newNodes)), 
        
        // Then add a link between kid and node.
        ...links.filter(link => link.type === "child" && !link.parent.includes(id))
      ];
    } else {

      // If not expended, expend it.
      // For expending a node, you need to generate child nodes,
      // links to those child nodes and links between the child nodes.
      // Parent in nodes and links are links which iclude the parent
      // and the parents in the parent's parent attribute.
      
      //  first add the inner nodes to component
      newNodes = [...nodes, ...inner.nodes
        .map(kid => new Node({ 
          ...kid, 
          value: this.value * .7,
          parent: [ ...this.parent, id ],
        }))];

      // Then add inner links.
      newLinks = [ ...nodes[0].inner.links.map(kid => generateConnection({
          ...kid,
        }, newNodes)), 
        ...links.filter(link => link.type === "child" && !link.parent.includes(id)).map(link => ({ ...link, source: link.source.id, target: link.target.id })),
        // Then add a link between kid and node.
        ...inner.nodes.map(kid => ({
          ...child,
          source: id,
          type: "child",
          target: kid.id,
          parent: [ ...this.parent, id ],
      }))];
    };

    // Update component's state.
    component.setState({ links: newLinks, nodes: newNodes });
};

// Generate a function spesific for the component that will generate
// and store nodes in its state. For adding a node, name parametre is 
// the only parametre which is needed. Group is used for coloring. 
export default (component) => (node) => ({
    ...node,
    expended: false,
    expendable: isExpendable(node.inner),
    inner: secureInner(node.inner),
    shape: secureShape(node.shape),
    parent: secureParent(node.parent),
    component,
    toggle,
});