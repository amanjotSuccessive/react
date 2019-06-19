import React from 'react';
import PropTypes from 'prop-types'
export default class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namedTitle: "aman"
        }
    }

    
    subtitle() {
        if (this.props.subtile) {
            <h2>{this.props.subtile}</h2>
        }
    }

    handleChangeState = () => {
        this.setState({ namedTitle: "singh" })
    }

    render() {
        const { namedTitle } = this.state

        return (
            <div id='titleDiv' className="title-bar">
                <h1 className='wrapper' key='title'>{namedTitle} {this.props.title}</h1>
                {/*   {this.subtitle} */}
                <button onClick={this.handleChangeState}> change state</button>
            </div>
        )
    }
}

TitleBar.prototype = {
    title: PropTypes.PropTypes.string
}

TitleBar.defaultProps = {
    title: 'Default Title'
}