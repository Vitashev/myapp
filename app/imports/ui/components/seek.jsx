import React, {Component, propTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import CusProgressBar from './progressbar.jsx';

export default class CusSeek extends TrackerReact(Component) {
    constructor(props){
        super(props);
 
        this.state = {
          focused: false,
          value:0
        };
    }
    

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.seek !== nextProps.seek ||
               this.props.currentTime !== nextProps.currentTime ||
               this.props.percentageBuffered !== nextProps.percentageBuffered ||
               this.props.percentagePlayed !== nextProps.percentagePlayed ||
               this.state.value !== nextProps.value ||
               this.props.duration !== nextProps.duration;
    }

    /**
     * Calculates the seek time based on change of input.
     * @param  {object} e Event object
     * @return {undefined}
     */
    seek(e) {
        this.props.seek(e.target.value * this.props.duration / 100);
        this.setState({
            value: this.props.percentagePlayed
        });
    }
    
    //this.props.ontimeupdate = function() {myFunction()};

    onFocus() {
        this.setState({
            focused: true
        });
    }

    onBlur() {
        this.setState({
            focused: false
        });
    }

    render() {
        return (
            <div
                className={'video-seek video__control' + (this.state.focused
                    ? ' video__control--focused' : '')}
                aria-label={this.props.copyKeys.seek}>
                <div className="video-seek__container">
                    <div style={{
                        width: this.props.percentageBuffered + '%'
                    }} className="video-seek__buffer-bar">
                    </div>
                    <div>{this.props.currentTime}</div>
                    
                    <div>
                        <div className="range-field">
                        <input 
                            onBlur={this.onBlur.bind(this)}
                            onFocus={this.onFocus.bind(this)}
                            ref="input"
                            onChange={this.seek.bind(this)}
                            type="range"
                            min="0"
                            max="100"
                            value={this.state.value}
                            step={this.props.step} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CusSeek.propTypes = {
    currentTime: React.PropTypes.number,
    copyKeys: React.PropTypes.object,
    ontimeupdate: React.PropTypes.func,
    seek: React.PropTypes.func,
    step: React.PropTypes.number || 0.1,
    percentageBuffered: React.PropTypes.number,
    percentagePlayed: React.PropTypes.number,
    duration: React.PropTypes.number
};