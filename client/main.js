import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Players } from '../imports/api/players'
import { Tracker } from 'meteor/tracker'
import TitleBar from '../imports/ui/TitleBar'
import AddPlayer from '../imports/ui/AddPlayer';
import Player from '../imports/ui/renderPlayer';

let dbPlayers = [];

/*
 setTimeout(() => {
  dbPlayers = Players.find().fetch();
  console.log('fff', dbPlayers)
}, 1000); 
*/


const renderPlayers = function (players) {
  //return [line under myName] 
  const renderPlayers = players.map(function (player) {
    console.log('--->', player)
    return (
      <Player player={[player]}/>
    )
  })
  return renderPlayers
}

Meteor.startup(() => {
  const hello = 'hello'
  const title = 'title'
  Tracker.autorun(() => {
    dbPlayers = Players.find().fetch(); //position matters
    const jsx = (
      <div key='mainJsx'>
        <TitleBar title={title}/>
        <p>{hello}</p>
          <AddPlayer />
        {renderPlayers(dbPlayers)}
      </div>
    )
    render(jsx, document.getElementById('render-target'));
  })
})