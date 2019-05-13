import React from 'react';
import PropTypes from 'prop-types'
export default class TitleBar extends React.Component {
    render() {
        return (
            <div key='titleDiv'>
                <h1 key='title'>MY APP NAME {this.props.title}</h1>
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