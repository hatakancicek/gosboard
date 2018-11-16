import React, { Component } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import Node from './Node';

const nodes = [{
  id: "Gamegos Backend Architecture",
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
      target: "Kubernetes Pods",
    }, {
      target: "Kubernetes Pods",
      source: "Core Databases",
    }, {
      target: "Core Databases",
      source: "Kubernetes Pods",
    }, {
      target: "System Logs",
      source: "Kubernetes Pods",
    }, {
      target: "Non-Flux Games",
      source: "System Logs",
    }, {
      target: "Non-Flux Games",
      source: "System Logs",
      curvature: .5,
    }, {
      target: "Analysis System",
      source: "Kubernetes Pods",
    }, {
      source: "Kubernetes Pods",
      target: "All Services",
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
    return (
      <div className="App">
        <ForceGraph2D
          ref="graph"
          nodeVal="value"
          dagLevelDistance={900}
          nodeLabel="id"
          graphData={this.state}
          onNodeClick={nodeToggle}
          nodeAutoColorBy="group"
          backgroundColor="#263238"
          linkDirectionalArrowLength="arrowLength"
          linkCurvature="curvature"
          linkWidth="width"
          linkDirectionalParticles="particles"
          nodeCanvasObject={({shape, ...node}, ctx) => shape(node, ctx)}
        />
      </div>
    );
  };
};

export default App;
