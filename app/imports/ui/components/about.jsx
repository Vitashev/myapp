import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Video from './video.jsx';
import {Meteor} from 'meteor/meteor';
import {Videos, Subtitles} from '../../api/collections/lists.js';

export default class About extends TrackerReact(Component) {

    constructor(props){
        super(props);
        this.state = {
            subscriptions: {
                videos:  Meteor.subscribe('allVideos'),
                subtitles: Meteor.subscribe('allSubtitles')
            }
        }
    }

    componentWillUnmount() {
        this.state.subscriptions.videos.stop();
        this.state.subscriptions.subtitles.stop();
    }

    render(){
        
        const video = Videos.findOne();


        return(
            <div>
                {(()=>{
                    if (this.state.subscriptions.videos.ready() && this.state.subscriptions.subtitles.ready()) {
                        const subtitles = Subtitles.find({videoId: video._id}).fetch();

                        return <Video dataVideo={video} dataSrt={subtitles[0]}/>;
                    }
                })()}
            </div>
            )
    }
    
}