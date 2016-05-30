import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import {Resolutions} from '../../api/lists/lists.js';
import {createContainer} from 'meteor/react-meteor-data';
import Title from './title.jsx';
import Register from './register.jsx';
import Login from './login.jsx';

export default class App extends Component {
    
    addResolution(event){
        event.preventDefault();
        let text = this.refs.resolution.value.trim();
        Meteor.call('resolutions.insert', text);
        this.refs.resolution.value = '';
    }
    
    deleteResolution(id){
        Meteor.call('resolutions.remove', id);
    }
    
    render(){
     return (
         <div>
             {(() => {
                return (this.props.currentUser)?'Youre logged in.': <div><Register/><Login/></div>;
            })()}
            <Title text="My app component" />
            <form onSubmit={this.addResolution.bind(this)}>
                <input type="text" ref="resolution" />
            </form>
            <ul>
            {this.props.resolutions.map((value) => (
                <li key={value._id}>{value.text}  <button className="btn" onClick={() => this.deleteResolution(value._id)}>
            delete
            </button></li>
            ))}
            </ul>
         </div>    
         
         )   
    }
}

App.propTypes = {
  resolutions: PropTypes.array.isRequired,
  currentUser: PropTypes.object
};
 
export default createContainer(() => {
  Meteor.subscribe('resolutions');
  return {
    resolutions: Resolutions.find({}).fetch() || [],
    currentUser: Meteor.user()
  };
}, App);


    
