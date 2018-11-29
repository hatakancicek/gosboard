import nodes from './Nodes';
import Config from './Config';
import React, { Component } from 'react';
import Node, { toggle, draw } from './Node';
import { ForceGraph2D } from 'react-force-graph';
import SelectionManager from './SelectionManager';

const { 
  highlightedLink, 
  graphBackground,
  parentLinkColor,
  childLinkColor,
} = Config;

const styles = {
  connectionButton: {
    position: 'absolute',
    padding: 12,
    top: 20,
    left: 20,
    width:160,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FAFAFA',
    marginLeft: 2,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#FAFAFA',
    fontStyle: 'italic',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
};

class App extends Component {
  state = {
    nodes: [],
    links: [],
    showChildren: true,
  };

  // Zoom graph and generate the node 0.
  componentDidMount() {
    this.refs.graph.zoom(15, 750);
    this.Node = Node(this);
    this.setState({
      nodes: [new this.Node(nodes[0])]
    });
  };

  // Focuses the node with thw givven id.
  focusNode = id => {
    const { nodes } = this.state;

    for(let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      if(node.id === id) {
          this.refs.graph.centerAt(node.x, node.y, 750);
          this.refs.graph.zoom(15, 750);
        return;
      };
    };
  };

  // Node hover binding based on the value of node.
  // Hover returns null when not hovered on a node.
  nodeHover = node => node 
    ? node.hover() 
    : this.refs.manager.clearHighlight();

  // Function for coloring links.
  linkColor = link => {
    const color = link.color || highlightedLink;

    if(link.type === "child")
      link.width = .3

    else 
      link.width = 1;

    // Check if manager exists.
    if(!this.refs.manager) 
      return color;

    const { highlightNode } = this.refs.manager.state;

    // Check if highlighted node exists.
    if(!highlightNode) 
      return color;
    
    if(link.target)

    // Check if link belongs to highlighted node.
    if((link.source.id || link.source) === highlightNode) {
      if(link.type === "child") {
        link.width = 3;
        return childLinkColor;
      }

      link.width = 5;
      return color;
    }
    if((link.target.id || link.target) === highlightNode) {
      if(link.type === "child") {
        link.width = 3;
        return parentLinkColor;
      }

      link.width = 5;
      return color;  
    };

    // Return the color of background.
    return graphBackground;
  };

  selectNode = node => this.setState({ node }); 

  // Toggle connections and clear selection.
  toggleConnections = _ => {
    const { showConnections } = this.state;
    this.refs.manager.clearSelection();

    this.setState({
      showConnections: !showConnections,
    });
  };

  render() {
    const { linkColor, nodeHover, toggleConnections } = this;
    let { links, nodes, showConnections } = this.state;

    // Remove connections if connection toggle is off.
    if(!showConnections)
      links = links.filter(({ type }) =>
        type === "child");

    return (
      <div 
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <ForceGraph2D
          ref="graph"
          nodeVal="value"
          linkWidth="width"
          onNodeClick={toggle}
          linkColor={linkColor}
          onNodeHover={nodeHover}
          nodeAutoColorBy="group"
          nodeCanvasObject={draw}
          linkCurvature="curvature"
          graphData={{ nodes, links, }}
          backgroundColor={graphBackground}
          linkDirectionalParticles="particles"
          linkDirectionalArrowLength="arrowLength"
        />
        <div
          style={{
            ...styles.connectionButton,
            backgroundColor: showConnections 
              ? '#2E7D32' 
              : '#455A64',
          }}
          onClick={toggleConnections}
        >
          <h3
            style={styles.buttonText}
          >
            Toggle Connections
          </h3>
        </div>
        <SelectionManager 
          links={links} 
          ref="manager" 
        />
        <p style={styles.footer} >
          User S key to enter Selection Mode. C key to Clear/Cancel.
        </p>
      </div>
    );
  };
};

export default App;
