import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Register extends TrackerReact(Component) {
    registerUser(event){
        event.preventDefault();
        let username = this.refs.registerUsername.value.trim();
        let password = this.refs.registerPassword.value.trim();
        Accounts.createUser({
            username,
            password
        });
    }
    
    render(){
        return (
            <div className="row">
                <form className="col s12 black-text">
                    <input type="text" className="input-field" ref="registerUsername"/>
                    <input type="password" className="input-field" ref="registerPassword"/>
                    <button type="submit" className="btn" onClick={this.registerUser.bind(this)}>Register</button>
                </form>
            </div>
            )
    }
}