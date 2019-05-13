import { Meteor } from 'meteor/meteor';
import Players from '../imports/api/players';


// meteor mongo db apis are syncronous

Meteor.startup(() => {
 // console.log('----->,', Players.find({}).fetch())
});
