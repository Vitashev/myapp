import {Resolutions, Videos, Subtitles} from '../imports/api/collections/lists.js';
import {Meteor} from 'meteor/meteor';

Meteor.publish('allResolutions', function() {
    return Resolutions.find({owner:this.userId});
});

Meteor.publish('allVideos', function() {
    return Videos.find({});
});

Meteor.publish('allSubtitles', function() {
    return Subtitles.find({});
});