import React from 'react';
import { Players } from '../api/players'
import TitleBar from '../ui/TitleBar'
import AddPlayer from '../ui/AddPlayer';
import Player from './../ui/renderPlayer';

export default class App extends React.Component {

    renderPlayers(players) {
        return (<Player players={players} />)
    }

    render() {
        const title = ''
        const dbPlayers = Players.find({}, { sort: { name: 1 } }).fetch(); //position matters
        return (
            <div key='main'>
                <TitleBar title={title} />
                <AddPlayer />
                {this.renderPlayers(dbPlayers)}
            </div>
        )
    }
}