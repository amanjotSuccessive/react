import React from 'react';
import { Players } from './../api/players';
export default class AddPlayer extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const val = document.getElementById('player').value
        Players.insert({ 'name': val, score: 0 })
        document.getElementById('player').value = ''
    }
    render() {
        return (
            <form key='1' className='wrapper item form' onSubmit={this.handleSubmit}>
                <input className='form__input' key='2' type='text' name='playerName' id='player' placeholder='Player Name'></input>
                <button key='3'>Add Player</button>
            </form>
        )
    }
}
