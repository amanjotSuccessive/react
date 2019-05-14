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
        console.log('--->', players)
        if (!players.length) return (
            <div>
                <p className='item__message'>Please add Player to get started
                </p>
            </div>)
        const playerList = players.map(player => {
            return (
                <div key={`p${player._id}`} className='wrapper item player player player__name' >{player.name}  {player.score}
                    <div className='player__actions'>
                        <button id={`a${player._id}`} className='button button--round' onClick={() => { this.addPoint(player) }} >+1 </button>
                        <button id={`s${player._id}`} className='button button--round' onClick={() => { this.subPoint(player) }} >-1 </button>
                        <button id={`r${player._id}`} className='button button--round' onClick={() => { this.remove(player._id) }} >X </button>
                    </div>
                </div>
            )
        });
        return (<div> {playerList} </div>)
    }
}
/* 
Player.propTypes = {
    player: PropTypes.PropTypes.array.isRequired
}
 */