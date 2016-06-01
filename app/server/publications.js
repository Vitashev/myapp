import {Resolutions} from '../imports/api/collections/lists.js';
import {Meteor} from 'meteor/meteor';

Meteor.publish('allResolutions', function() {
    return Resolutions.find({owner:this.userId})
});
