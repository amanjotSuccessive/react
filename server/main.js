import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players'

// meteor mongo db apis are syncronous

Meteor.startup(() => {
  // code to run on server at startup
   Players.insert({
    name: 'R', score: 60
  }) 
  console.log(Players.find({}).fetch())
});
