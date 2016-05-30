import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';


import {createContainer} from 'meteor/react-meteor-data';

export default class Login extends Component {
    loginUser(event){
        event.preventDefault();
        
        let username = this.refs.loginUsername.value.trim();
        let password = this.refs.loginPassword.value.trim();
        Meteor.loginWithPassword(username, password);
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.loginUser.bind(this)}>
                    <input type="text" ref="loginUsername"/>
                    <input type="password" ref="loginPassword"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
            )
    }
}