import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class About extends TrackerReact(Component) {
    
    render(){
        return(
            <div>
                <h1>About Us</h1>
                <p>About Page</p>
            </div>
            )
    }
    
}