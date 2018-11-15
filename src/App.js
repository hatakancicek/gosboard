import React, { Component } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { shapes } from './Costants';

const nodes = [{
  id: "GOS",
  name: "Gamegos Backend Architecture",
  value: 2,
  shape: shapes.CIRCLE,
  group: "GOS",
  expendable: true,
  inner: {
    nodes: [{
      name: "Kubernetes Pods",
      shape: shapes.CIRCLE,
      group: "K8",
    }, {
      name: "Load Balancer",
      shape: shapes.CIRCLE,
      group: "ELB",
    }, {
      name: "Version Control and Continuous Integration",
      shape: shapes.CIRCLE,
      group: "GIT",
    }, {
      name: "Non-Flux Games",
      shape: shapes.CIRCLE,
      group: "NFG",
    }],
    links: [{
      source: 1,
      target: 0,
      color: '#FAFAFA',
      particles: 2,
      arrowLength: 2,
      width: 1,
      curvature: .5
    }]
  },
}];

const nodeToggle = node => node.toggle();

class App extends Component {
  state = {
    nodes: [],
    links: [],
  };

  componentWillMount() {
    this.setState({
      nodes: [new this.Node(nodes[0])]
    });
  };

  componentDidMount() {
    this.refs.graph.zoom([15]);
  }

  Node = ((app) => (node, parent) => ({
    ...node,
    parent: parent || [],
    expended: false,
    inner: node.inner || { nodes: [], links: [] },
    expendable: node.inner 
      && node.inner.nodes
      && node.inner.nodes.length,
    toggle() {
      const { Node } = app;
      const { expended, inner, id, expendable } = this;
      if(!expendable) return;
      const { nodes, links } = app.state;
      this.expended = !expended;
      this.opacity = expended ? 0.1 : 1;
      if(expended) {
        let newNodes = nodes.filter(node => !node.parent.includes(id));
        let newLinks = links.filter(link => !link.parent.includes(id));
        app.setState({ links: newLinks, nodes: newNodes });
      } else {
        let newNodes = [...nodes, ...inner.nodes
          .map((kid, index) => new Node({ 
            ...kid, 
            value: this.value * .7,
            id: id + "_" +  index,
          }, [ ...this.parent, id ]))];
        let newLinks = [...links, ...inner.links
          .map(kid => ({
            ...kid,
            source: id + "_" + kid.source,
            target: id + "_" + kid.target,
            parent: [ ...this.parent, id ],
          })), ...inner.nodes
          .map((_, index) => ({
            source: id,
            target: id + "_" + index,
            parent: [ ...this.parent, id ],
            color: '#90A4AE',
            arrowLength: 0,
            particles: 0,
            width: .3,
          }))];

        console.log({ links: newLinks, nodes: newNodes })

        app.setState({ links: newLinks, nodes: newNodes });
      }
    }
  }))(this);
  
  render() {
    return (
      <div className="App">
        <ForceGraph2D
          ref="graph"
          nodeVal="value"
          dagLevelDistance={900}
          nodeLabel="name"
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
