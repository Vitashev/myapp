import React, {Component, propTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class CusFullscreen extends TrackerReact(Component) {

    shouldComponentUpdate(nextProps) {
        return this.props.fullscreen !== nextProps.fullscreen;
    }

    render() {
        return (
            <button
                onClick={this.props.fullscreen}
                className="btn-floating"
                aria-label={this.props.copyKeys.fullscreen}>
                <i className="zmdi zmdi-fullscreen"></i>
            </button>
        );
    }
}

CusFullscreen.propTypes = {
  copyKeys: React.PropTypes.object,
  fullscreen: React.PropTypes.func
};