import React from 'react';
import PropTypes from 'prop-types';

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
    overflowY: "scroll",
  },
  header: {
    color: '#FAFAFA',
    display: 'block',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerHeader: {
    color: '#FAFAFA',
    display: 'block',
    fontWeight: 'bold',
    textAlign: 'left',
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
  link: {
      fontWeight: 'bold',
      color: '#DDDDDD',
  },
  inner: {
    color: '#DDDDDD',
  },
  line: {
      width: '100%',
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
  }
};

// Base component for handling selection operations.
export default class SelectionManager extends React.Component {
    state = {

        // Activated with S key press.
        selectionMode: false,

        // Highlighted node.
        highlightNode: null,

        // Nodes connected to the highlighted node.
        highlightNodes: null,

        // Clicked node for showing details.
        node: null,
    };

    static propTypes = {
        links: PropTypes.arrayOf(PropTypes.shape({
            source: PropTypes.oneOfType([PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired, PropTypes.string.isRequired ]),
        })).isRequired,
    };

    // Clears highlight if selection mode is active.
    clearHighlight = _ => {
        const { selectionMode } = this.state;

        if(selectionMode) {
            this.setState({ 
                highlightNode: undefined,
                highlightNodes: null,
             });
        };
    };

    // Highlights node if selection mode is active.
    highlightNode = id => {
        const { selectionMode } = this.state;
        const { links } = this.props;

        if(!id || !selectionMode) return;

        // Traverse links and find th one that are connected
        // to the highlighted node.
        const highlightNodes = links
        .filter(link => 
            (link.source.id || link.source) === id
            || (link.target.id || link.target) === id)

        // Update highlighted nodes accordingly.
        .map(link => (link.source.id || link.source) === id 
            ? (link.target.id || link.target)
            : (link.source.id || link.source))

        // Update state to highlight node.
        this.setState({
            highlightNode: id,
            highlightNodes
        });
    };

    // Starts selection mode.
    startSelectionMode = _ => {
        const { selectionMode } = this.state;

        if(!selectionMode) {
            this.setState({
                selectionMode: true,
                highlightNode: null,
                highlightNodes: null,
                node: null,
            });
        };
    };

    // Clears current selections and 
    // ends selection mode.
    clearSelection = _ => {
        this.setState({
            selectionMode: false,
            highlightNode: null,
            highlightNodes: null,
            node: null,
        });
    };

    // Adds listener for keyDown events.
    componentWillMount() {
      const { handleKeyDown } = this;
      document.addEventListener("keydown", handleKeyDown);
    };

    // Checks if keyDown is S or C.
    handleKeyDown = ({ code }) => {
        const { startSelectionMode, clearSelection } = this;

        switch(code) {
            case "KeyS": 
                startSelectionMode();
                break;

            case "KeyC":
                clearSelection();
                break;

            default:
                break;
        };
    };

    // Renders an empty div.
    render() {
        const { node } = this.state;
        const { links } = this.props;

        let _links;

        if(node)
            _links = links.filter(link => 
                link.type !== "child"
                && ((link.source.id || link.source) === node.id
                    || (link.target.id || link.target) === node.id))

        return  node ?
          <div style={styles.informationWrapper} >
            <h2 style={styles.header} >{node.id}</h2>
            <p style={styles.paragraph} >{node.description}</p>
             {
                 !!node.links &&
                 !!Object.keys(node.links).length && 
                 Object.keys(node.links).map(key =>
                    <li style={styles.inner} key={key} >
                        <a style={styles.link} href={node.links[key]} >
                            {key}<br/>
                        </a>
                    </li>)
             }
             {
                 !!node.inner &&
                 !!node.inner.nodes &&
                 !!node.inner.nodes.length &&
                 <div>
                    <h3 style={styles.innerHeader} >Includes:</h3>
                    <ul>
                        {node.inner.nodes.map(key => 
                                <li style={styles.inner} key={key.id} >
                                    {key.id}
                                </li>)}
                    </ul>
                 </div>
             }
             {
                 !!_links &&
                 !!_links.length &&
                 <div>
                    <h3 style={styles.innerHeader} >Connections:</h3>
                    {_links.map((link, index) =>
                        <div style={styles.inner} key={index} >
                            <p style={styles.line}>{(link.source.id || link.source)}</p>
                            <p style={styles.line}>|</p>
                            <p style={styles.line}>|</p>
                            <p style={styles.line}>{link.data}</p>
                            <p style={styles.line}>|</p>
                            <p style={styles.line}>V</p>
                            <p style={styles.line}>{(link.target.id || link.target)}</p>
                            <p style={styles.line} >-------------------------------------------</p>
                        </div>)}
                </div>
             }
          </div> : 
          <div />
    };
};