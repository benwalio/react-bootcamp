import React, { Component } from 'react';

class Icons extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "cloud"
        ]
    };

    constructor(props) {
        super(props);
        this.state = { icons: []};
        this.addIcon = this.addIcon.bind(this);
    };

    // addIcon () {
    //     let idx = Math.floor(Math.random() * this.props.options.length);
    //     let newIcon = this.props.options[idx];

    //     // BAD WAY, DO NOT DIRECTLY EDIT STATE
    //     let icons = this.state.icons;
    //     icons.push(newIcon);
    //     this.setState({ icons: icons });
    // }

    addIcon () {
        // good way
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];

        // ...this.state.icons means that React creates a copy of this.state.icons (only for arrays/ iterables)
        this.setState({icons: [...this.state.icons, newIcon]});
    }

    render() {
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);

        return (
            <div>
                <h1>icons: {icons}</h1>
                <button onClick={this.addIcon}>add icon</button>
            </div>
        );
    }
}

export default Icons;