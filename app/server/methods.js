import {Resolutions} from '../imports/api/collections/lists.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import parser from 'subtitles-parser';

var fs = Npm.require('fs');
var srt = fs.readFileSync('./public/subtitles/TheBigBangTheory-1x01-Pilot.720pHDTV.CTU.en.srt');

var data = parser.fromSrt(srt);
console.log(data);

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
  },

  'getSubtitle'() {
    
    //var res = HTTP.get('/subtitles/TheBigBangTheory-1x01-Pilot.720pHDTV.CTU.en.srt');
    //console.log(response);
  }


});