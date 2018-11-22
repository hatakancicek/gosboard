import React from 'react';

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
        return <div />;
    };
};