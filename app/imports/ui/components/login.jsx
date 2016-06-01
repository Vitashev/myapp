import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Login extends TrackerReact(Component) {
    loginUser(event){
        event.preventDefault();
        let username = this.refs.loginUsername.value.trim();
        let password = this.refs.loginPassword.value.trim();
        console.log("hi");
        Meteor.loginWithPassword(username, password);
    }
    
    render(){
        return (
            <div className="row">
                <form className="col s12 black-text">
                    <h5>Sign In</h5>
                    <input type="text" ref="loginUsername" className="input-field"/>
                    <input type="password" ref="loginPassword" className="input-field"/>
                    <button className="btn" onClick={this.loginUser.bind(this)}>Login</button>
                </form>
            </div>
            )
    }
}