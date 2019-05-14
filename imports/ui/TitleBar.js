import React from 'react';
import PropTypes from 'prop-types'
export default class TitleBar extends React.Component {
    subtitle(){
        if(this.props.subtile){
            <h2>{this.props.subtile}</h2>
        }
    }
    render() {
        return (
            <div id='titleDiv'>
                <h1 key='title'>MY APP NAME {this.props.title}</h1>
              {/*   {this.subtitle} */}
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