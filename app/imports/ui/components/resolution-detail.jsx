import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Resolutions} from '../../api/collections/lists.js';

export default class ResolutionDetail extends TrackerReact(Component) {
    
    constructor(props){
        super(props);
        this.state = {
            subscriptions: {
               resolutions:  Meteor.subscribe('allResolutions')
            }
        }
    }
    
    componentWillUnmount(){
        this.state.subscriptions.resolutions.stop();
    }
    
    resolutions(){
        return Resolutions.findOne(this.props.id);
    } 
    
    render(){
        return(
            <div>
                <h1>About Us</h1>
                <p>{this.resolutions().text}</p>
            </div>
            )
    }
    
}