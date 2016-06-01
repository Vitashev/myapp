import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Register from './register.jsx';
import Login from './login.jsx';

export default class Navbar extends TrackerReact(Component) {
    logOut(){
        Meteor.logout();
    }
    
    currentUser(){ 
        return Meteor.user();
    }
    
    render(){
        Materialize.updateTextFields();
        
        return(
            <nav className="purple" role="navigation">
                <div className="nav-wrapper container">
                  <ul className="left hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
            
                  <div className="right hide-on-med-and-down">
                    <div className="cus-dropdown">
                      <span>Sign In/Out</span>
                      <div className="card-panel cus-dropdown-content container">
                         {(() => {
                                return (this.currentUser())? <div className="teal-text">Youre logged in. <button className="btn" onClick={this.logOut.bind(this)}>Log out</button></div>: <div><Login/><Register/></div>;
                            })()}
                      </div>
                    </div>
                  </div>
                  <ul id="nav-mobile" className="side-nav">
                    <li><a href="#">Navbar Link</a></li>
                  </ul>
                  <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                </div>
             </nav>
            )
        
    }
    
}

    
