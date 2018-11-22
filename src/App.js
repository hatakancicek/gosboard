import nodes from './Nodes';
import Config from './Config';
import React, { Component } from 'react';
import Node, { toggle, draw } from './Node';
import { ForceGraph2D } from 'react-force-graph';
import SelectionManager from './SelectionManager';

const { highlightedLink, graphBackground, } = Config;

const styles = {
  informationWrapper: {
    top: 20,
    right: 20,
    bottom: 20,
    padding: 12,
    position: 'absolute',
    width: '20%',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    maxWidth: 400,
    minWidth: 200,
  },
  header: {
    color: '#FAFAFA',
    display: 'block',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    padding: 12,
    marginTop: 10,
    color: '#FAFAFA',
    textAlign: 'center',
  },
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
};

class App extends Component {
  state = {
    nodes: [],
    links: [],
    showChildren: true,
  };

  // Zoom graph and generate the node 0.
  componentDidMount() {
    this.refs.graph.zoom([15]);
    this.Node = Node(this);
    this.setState({
      nodes: [new this.Node(nodes[0])]
    });
  };

  // Node hover binding based on the value of node.
  // Hover returns null when not hovered on a node.
  nodeHover = node => node 
    ? node.hover() 
    : this.refs.manager.clearHighlight();

  // Function for coloring links.
  linkColor = link => {
    const color = link.color || highlightedLink;

    // Check if manager exists.
    if(!this.refs.manager) 
      return color;

    const { highlightNode } = this.refs.manager.state;

    // Check if highlighted node exists.
    if(!highlightNode) 
      return color;

    // Check if link belongs to highlighted node.
    if((link.source.id || link.source) === highlightNode) 
      return color;
    if((link.target.id || link.target) === highlightNode) 
      return color;  

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
    let { node, links, nodes, showConnections } = this.state;

    // Remove connections if connection toggle is off.
    if(!showConnections)
      links = links.filter(({ type }) =>
        type === "child");

    return (
      <div className="App">
        <SelectionManager 
          links={links} 
          ref="manager" 
        />
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
          linkVisibility={"visible"}
          graphData={{ nodes, links, }}
          backgroundColor={graphBackground}
          linkDirectionalParticles="particles"
          linkDirectionalArrowLength="arrowLength"
        />
        {node &&
          <div style={styles.informationWrapper} >
            <h3 style={styles.header} >{node.id}</h3>
            <p style={styles.paragraph} >{node.description}</p>
          </div>
        }
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
      </div>
    );
  };
};

export default App;
