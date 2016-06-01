import {Resolutions} from '../imports/api/collections/lists.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

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
  },
    'resolutions.update'(id, isComplete) {
    check(id, String);
    check(isComplete, Boolean);
 
    Resolutions.update(id, {$set: {complete: !isComplete}});
  }
});