import React from 'react';
import { Meteor } from 'meteor/meteor';
import App from './../imports/ui/App'
import { Tracker } from 'meteor/tracker';
import {render}  from 'react-dom';

/*
 setTimeout(() => {
  dbPlayers = Players.find().fetch();
  console.log('fff', dbPlayers)
}, 1000); 
*/

Meteor.startup(() => {

  Tracker.autorun(() => {
    render(<App/>, document.getElementById('render-target'));
  })
})