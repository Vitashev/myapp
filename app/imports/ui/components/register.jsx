import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';


import {createContainer} from 'meteor/react-meteor-data';

export default class Register extends Component {
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
            <div>
                <form onSubmit={this.registerUser.bind(this)}>
                    <input type="text" ref="registerUsername"/>
                    <input type="password" ref="registerPassword"/>
                    <input type="submit" value="Register"/>
                </form>
            </div>
            )
    }
}