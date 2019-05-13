import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Players } from '../imports/api/players'
import { Tracker } from 'meteor/tracker'

let dbPlayers = [];

/*
 setTimeout(() => {
  dbPlayers = Players.find().fetch();
  console.log('fff', dbPlayers)
}, 1000); 

Tracker.autorun(() =>{
  dbPlayers = Players.find().fetch();
  console.log('tracker', dbPlayers)
})
 */
const players = [{
  '_id': '1',
  'name': 'virat',
  'score': 100
},
{
  '_id': '2',
  'name': 'dhoni',
  'score': 100
}]

const renderPlayers = function (players) {
  //return [line under myName] 
  const renderPlayers = players.map(function (player) {
    console.log('--->', player)
    return (
      <p key={player._id}>{player.name}  {player.score}
        <button id={player._id} onClick={() => { addPoint(player) }} >+1 </button>
        <button id={player._id} onClick={() => { subPoint(player) }} >-1 </button>
        <button id={player._id} onClick={() => { remove(player._id) }} >X </button>
      </p>
    )
  })
  return renderPlayers
}

function remove(id) {
  Players.remove({ _id: id })
}


function addPoint(player) {
const cal =  Players.update({ _id: player._id },{$inc: { score: 1 } })
console.log('cal',cal)
}

function subPoint(player) {
  Players.update({ _id: player._id }, {$set: {score: player.score - 1 } })
}

const hnandleSubmit = function (e) {
  e.preventDefault();
  const val = document.getElementById('player').value
  Players.insert({ 'name': val,score: 0 })
  document.getElementById('player').value = ''
}
Meteor.startup(() => {
  const hello = "hello"
  Tracker.autorun(() => {
    dbPlayers = Players.find().fetch(); //position matters
    const jsx = (
      <div>
        <p>{hello}</p>
        {/*   {[<p key='1'>1</p>, <p key='2'>2</p>]} or below-one*/}
        {renderPlayers(players)}
        {renderPlayers(dbPlayers)}
        <form onSubmit={hnandleSubmit} >
          <input type='text' name='playerName' id='player' placeholder='Player Name'></input>
          <button>Add Player</button>
        </form>
      </div>
    )
    console.log('----->?', dbPlayers)
    render(jsx, document.getElementById('render-target'));
  })
})