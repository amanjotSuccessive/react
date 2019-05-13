import React from 'react';
import { Players } from './../api/players'
import PropTypes from 'prop-types';
export default class Player extends React.Component {
    remove(id) {
        Players.remove({ _id: id })
    }


    addPoint(player) {
        const cal = Players.update({ _id: player._id }, { $inc: { score: 1 } })
        console.log('cal', cal)
    }

    subPoint(player) {
        Players.update({ _id: player._id }, { $set: { score: player.score - 1 } })
    }

    render() {
        const player = this.props.player
        return (
            <p id={`p${player[0]._id}`}>{player[0].name}  {player[0].score}
                <button id={`a${player[0]._id}`} onClick={() => { this.addPoint(player[0]) }} >+1 </button>
                <button id={`s${player[0]._id}`} onClick={() => { this.subPoint(player[0]) }} >-1 </button>
                <button id={`r${player[0]._id}`} onClick={() => { this.remove(player[0]._id) }} >X </button>
            </p>

        )
    }
}

Player.propTypes = {
    player: PropTypes.PropTypes.array.isRequired
}
