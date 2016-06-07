import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Video from './video.jsx';

export default class About extends TrackerReact(Component) {
    
    render(){
        var sources = [ "sintel_trailer-720p.mp4"]
        var videoOptions = {
          url: 'http://videos.thisisepic.com/2b9c1bf3-e19b-4be5-9d36-246c5d3607d8/high.mp4',
          poster: 'http://thumbnails.thisisepic.com/b1ce00de-e687-4c1b-97ac-afa05a287327/large/frame_0005.png'
        };
        return(
            <div>
            <Video 
                poster="http://thumbnails.thisisepic.com/b1ce00de-e687-4c1b-97ac-afa05a287327/large/frame_0005.png"
                src="http://videos.thisisepic.com/2b9c1bf3-e19b-4be5-9d36-246c5d3607d8/high.mp4"/>
            </div>
            )
    }
    
}