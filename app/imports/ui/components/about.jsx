import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Video from './video.jsx';
import {Meteor} from 'meteor/meteor';
import {Videos} from '../../api/collections/lists.js';
import parser from 'subtitles-parser';

export default class About extends TrackerReact(Component) {

    constructor(props){
        super(props);
        this.state = {
            subscriptions: {
                videos:  Meteor.subscribe('allVideos')
            }
        }

    }

    componentWillUnmount() {
        this.state.subscriptions.videos.stop();
    }

    render(){
        const video = Videos.findOne();

        return(
            <div>
                {(()=>((this.state.subscriptions.videos.ready()) ? <Video poster={video.poster} src={video.src}/> : ''))()}
            </div>
            )
    }
    
}