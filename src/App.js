import React, { Component } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import Node from './Node';
import nodes from './Nodes';

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
  }
}

const nodeToggle = node => node.toggle();

class App extends Component {
  state = {
    nodes: [],
    links: [],
  };

  componentWillMount() {
    this.Node = Node(this);
    this.setState({
      nodes: [new this.Node(nodes[0])]
    });
  };

  componentDidMount() {
    this.refs.graph.zoom([15]);
  }

  render() {
    let { node, links, nodes, showConnections } = this.state;

    if(!showConnections)
      links = links.filter(({ type }) =>
      type === "child"
    );

    return (
      <div className="App">
        <ForceGraph2D
          ref="graph"
          onNodeHover={_ => {}}
          nodeVal="value"
          dagLevelDistance={900}
          graphData={{
            nodes,
            links,
          }}
          onNodeClick={nodeToggle}
          nodeAutoColorBy="group"
          backgroundColor="#263238"
          linkDirectionalArrowLength="arrowLength"
          linkCurvature="curvature"
          linkWidth="width"
          linkDirectionalParticles="particles"
          nodeCanvasObject={({shape, ...node}, ctx) => 
            shape(node, ctx)}
        />
        {node &&
          <div style={styles.informationWrapper} >
            <h3 style={styles.header} >{node.id}</h3>
            <p style={styles.paragraph} >{node.description}</p>
          </div>
        }
        <div
          style={{
            position: 'absolute',
            backgroundColor: showConnections ? '#2E7D32' : '#455A64',
            padding: 12,
            top: 20,
            left: 20,
            borderRadius: 4,
          }}
          onClick={_ => this.setState({ 
            showConnections: !showConnections,
           })}
        >
          <h3
            style={{
              fontWeight: 'bold',
              color: '#FAFAFA',
            }}
          >
            Toggle Connections
          </h3>
        </div>
      </div>
    );
  };
};

export default App;
