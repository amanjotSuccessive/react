import React from 'react';
import { Players } from './../api/players'
//import PropTypes from 'prop-types';
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
        const players = this.props.players
        console.log('--->',players)
        if (!players.length) return (<p>Please add Player to get started </p>)
        const playerList = players.map(player => {
           return ( 
            <div key={`p${player._id}`}>{player.name}  {player.score}
                <button id={`a${player._id}`} onClick={() => { this.addPoint(player) }} >+1 </button>
                <button id={`s${player._id}`} onClick={() => { this.subPoint(player) }} >-1 </button>
                <button id={`r${player._id}`} onClick={() => { this.remove(player._id) }} >X </button>
            </div>
           )
        });
        return ( playerList)
    }
}
/* 
Player.propTypes = {
    player: PropTypes.PropTypes.array.isRequired
}
 */