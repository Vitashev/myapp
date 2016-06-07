import React, {Component, propTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class CusProgressBar extends TrackerReact(Component) {
    constructor(props){
        super(props);
        
        this.state = {
          progress: 0,
        };
 
       
    }

    componentDidMount() {
        // 'orient' is not supported by React but
        // is required for Firefox. Setting manually.
        // https://github.com/facebook/react/issues/2453
        this.refs.input.setAttribute('orient', this.props.orientation);
    }

    onChange() {
        // Placeholder
    }

    onFocus() {
        // Placeholder
    }

    onBlur() {
        // Placeholder
    }

    render() {
        return (
            <div>
                <div className="range-field">
                <input 
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                    ref="input"
                    onChange={this.props.onChange}
                    type="range"
                    min="0"
                    max="100"
                    value={this.props.progress}
                    step={this.props.step} />
                </div>
            </div>
        );
    }
}

CusProgressBar.propTypes = {
    orientation: React.PropTypes.string || 'horizontal',
    step: React.PropTypes.number || 0.1,
    progress: React.PropTypes.number || 0,
    onChange: React.PropTypes.func || this.onChange,
    onFocus: React.PropTypes.func || this.onFocus,
    onBlur: React.PropTypes.func || this.onBlur
};