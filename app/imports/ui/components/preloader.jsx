import React, {Component, propTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Preloader extends TrackerReact(Component) {
  render() {
    return (
    <div className="center-child">
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-teal-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
        </div>
      </div>
    </div>
    )
  }
}