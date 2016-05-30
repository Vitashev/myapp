import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
 
export const Resolutions = new Mongo.Collection('resolutions');

if (Meteor.isServer) {
    Meteor.publish('resolutions', () => (
    Resolutions.find()
));

}

Meteor.methods({
  'resolutions.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Resolutions.insert({
    text,
    complete: false,
    createdAt: new Date(),
    owner: Meteor.userId()
    });
  },
  'resolutions.remove'(id) {
    check(id, String);
 
    Resolutions.remove(id);
  }
});
