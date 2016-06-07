import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import classnames from 'classnames';

export default class SingleItem extends TrackerReact(Component){
    
    constructor(props){
        super(props);
 
        this.state = {
          hideCompleted: false,
        };
    }
  
    deleteResolution(id){
        this.setState({
          hideCompleted: true,
        });

        Meteor.call('resolutions.remove', id);
    }
    
    toggleChecked(){
        Meteor.call('resolutions.update', this.props.resolution._id, this.props.resolution.complete);
    }
    
    render(){
        
        const itemClassName = classnames({
          'animated zoomOut': this.state.hideCompleted
        });
        
        return(
            <li className={itemClassName}>
                <input type="checkbox" 
                       readOnly
                       checked={this.props.resolution.complete} />
                <label onClick={this.toggleChecked.bind(this)}>{this.props.resolution.text}</label>
          
                <button className="btn" onClick={() => this.deleteResolution(this.props.resolution._id)}>
            delete
            </button>
            <a href={`/resolution/${this.props.resolution._id}`}><i className="zmdi zmdi-edit"></i></a>
            </li>
            )
    }
}