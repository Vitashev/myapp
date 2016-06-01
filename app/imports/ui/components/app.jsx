import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Resolutions} from '../../api/collections/lists.js';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Title from './title.jsx';
import SingleItem from './single-item.jsx';

export default class App extends TrackerReact(Component) {
    
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
        return Resolutions.find().fetch();
    } 
    
    addResolution(event){
        event.preventDefault();
        let text = this.refs.resolution.value.trim();
        Meteor.call('resolutions.insert', text);
        this.refs.resolution.value = '';
    }
    
    render(){
        
        $('.dropdown-button').dropdown();
        
     return (
         <div>
            <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>
            <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!">one</a></li>
            </ul>
            <Title text="My app component" />
            <form onSubmit={this.addResolution.bind(this)}>
                <input type="text" ref="resolution" />

            </form>
            <ul>
            {this.resolutions().map((value) => (
                <SingleItem resolution={value} key={value._id}/>
            ))}
            </ul>
         </div>    
         
         )   
    }
}


    
