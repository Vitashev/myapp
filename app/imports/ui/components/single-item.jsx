import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class SingleItem extends TrackerReact(Component){
  
    deleteResolution(id){
        Meteor.call('resolutions.remove', id);
    }
    
    toggleChecked(){
        Meteor.call('resolutions.update', this.props.resolution._id, this.props.resolution.complete);
    }
    
    render(){
        return(
            <li>
                <input type="checkbox" 
                       readOnly
                       checked={this.props.resolution.complete} />
                <label onClick={this.toggleChecked.bind(this)}>{this.props.resolution.text}</label>
                {this.props.resolution.complete}
                <button className="btn" onClick={() => this.deleteResolution(this.props.resolution._id)}>
            delete
            </button>
            </li>
            )
    }
}