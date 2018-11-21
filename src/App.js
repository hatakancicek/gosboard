import React, { Component } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import Node from './Node';

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

console.log(window);

const nodes = [{
  id: "Gamegos Backend Architecture",
  description: "Gamegos Backend Architescture is where the magic happens.",
  value: .5,
  group: "GOS",
  expendable: true,
  inner: {
    nodes: [{
      id: "Kubernetes Pods",
      group: "K8",
      inner: {
        nodes: [{
            id: "All Services",
            group: "ALL",
          }, {
            id: "API Gateway",
            group: "GW",
          },
        ],
      }
    }, {
      id: "Load Balancer",
      group: "LB",
    }, {
      id: "Version Control and Continuous Integration",
      group: "GIT",
    }, {
      id: "Non-Flux Games",
      group: "NFG",
    }, {
      id: "Core Databases",
      group: "CD",
    }, {
      id: "Analysis System",
      group: "AS",
    }, {
      id: "System Logs",
      group: "SL",
    }],
    links: [{
      source: "Load Balancer",
      target: "Kubernetes Pods",
    }, {
      source: "Version Control and Continuous Integration",
      target: "All Services",
    }, {
      target: "Kubernetes Pods",
      source: "Core Databases",
    }, {
      target: "Core Databases",
      source: "Kubernetes Pods",
    }, {
      target: "System Logs",
      source: "All Services",
    }, {
      target: "System Logs",
      source: "API Gateway",
    }, {
      target: "Non-Flux Games",
      source: "API Gateway",
    }, {
      target: "Non-Flux Games",
      source: "System Logs",
      curvature: .5,
    }, {
      source: "Kubernetes Pods",
      target: "API Gateway",
    }, {
      source: "Kubernetes Pods",
      target: "All Services",
      curvature: .5,
    }, {
      source: "API Gateway",
      target: "All Services",
    },]
  },
}];

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
    const { node } = this.state;

    return (
      <div className="App">
        <ForceGraph2D
          ref="graph"
          onNodeHover={_ => {}}
          nodeVal="value"
          dagLevelDistance={900}
          graphData={this.state}
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
      </div>
    );
  };
};

export default App;
