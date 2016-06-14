import React, {Component, propTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import classnames from 'classnames';
import Nouislider from 'react-nouislider';
import Preloader from './preloader.jsx';

export default class Video extends TrackerReact(Component) {
    constructor(props) {
        super(props);
        this.slide = false;

        this.state = {
            progress: 0,
            duration: 1,
            volume: 0.3,
            isPlay: false,
            muted: false,
            isLoaded: false
        };
    }

    onSliderUpdate(values){
        this.videoEl.currentTime = values[0];
        this.slide = false
    }

    onLoadedMetadata(){
        this.setState({
            duration: this.videoEl.duration,
            isLoaded: true
        });
        this.timeFormatStr = (parseInt(this.videoEl.duration) > 3600) ? true : false;
    }

    formatTime(totalSeconds){
        totalSeconds = totalSeconds.toFixed()
        let hours   = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
        let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

        seconds = Math.round(seconds * 100) / 100

        let result = (this.timeFormatStr) ? (hours < 10 ? "0" + hours : hours) + ":" : "" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds  < 10 ? "0" + seconds : seconds);
        return result;

    }

    onTimeUpdate() {
        if(!this.slide){
            this.setState({
                progress: this.videoEl.currentTime
            });
        }
    }

    togglePlay(){
        if(this.state.isPlay){
            this.videoEl.pause();
        } else {
            this.videoEl.play();
        }
        this.setState({
            isPlay: !this.state.isPlay
        });
    }

    onSlide(value) {
        if(!this.slide){
            this.slide = true;
        }
        this.setState({
            progress: parseInt(value[0])
        });
    }

    toggleMute(){
        this.videoEl.muted = !this.videoEl.muted;
        this.setState({
            muted: this.videoEl.muted
        });
    }

    onVolumeUpdate(value){
        let volume = parseFloat(value[0]);

        this.videoEl.volume = volume;
        this.setState({
            volume
        });
        
        this.setState({
            muted: (!this.state.volume)
        });
    }

    render() {
        return (
            <div>
            <div className="row">
                <div className="col s12 m7">
                <Preloader/>







                  <div className="card hoverable">
                    <div className="card-image">
                        <video className="card-video"
                            ref={(el) => {
                                this.videoEl = el;
                            }}
                            onLoadedMetadata={this.onLoadedMetadata.bind(this)}
                            poster={this.props.poster}
                            onTimeUpdate={this.onTimeUpdate.bind(this)}>
                            <source src={this.props.src} type="video/mp4"/>
                        </video>
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12">
                                <Nouislider
                                    ref={(el) => {
                                            this.sliderEl = el;
                                        }}
                                    onChange={this.onSliderUpdate.bind(this)}
                                    onSlide={this.onSlide.bind(this)}
                                    range={{min: 0, max: this.state.duration}}
                                    start={[this.state.progress]}
                                    connect={"lower"}
                                    step={1} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <span className="left">{this.formatTime(this.state.progress)}</span>
                                <span className="right">{this.formatTime(this.state.duration)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <div className="row">
                            <div className="col s6">
                                <a href="#!">
                                    <i className="material-icons circle small waves-effect waves-grey teal-text" onClick={this.togglePlay.bind(this)}>
                                        {(() => ((this.state.isPlay) ? 'pause' : 'play_arrow'))()}
                                    </i>
                                </a>
                            </div>
                            <div className="col s6">
                                <div className="col s2">
                                    <a href="#!">
                                        <i className="material-icons circle small waves-effect waves-grey teal-text" onClick={this.toggleMute.bind(this)}>
                                            {(() => ((this.state.muted) ? 'volume_off' : 'volume_up'))()}
                                        </i>
                                    </a>
                                </div>
                                <div className="col s10 cus-volume">
                                    <Nouislider
                                        ref={(el) => {
                                            this.volumeEl = el;
                                        }}
                                        onSlide={this.onVolumeUpdate.bind(this)}
                                        range={{min: 0, max: 1}}
                                        start={[this.state.volume]}
                                        connect={"lower"}
                                        step={0.01} />
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

Video.propTypes = {
    currentTime: React.PropTypes.number,
    onChange: React.PropTypes.func || this.onChange,
    seek: React.PropTypes.func,
    step: React.PropTypes.number || 0.1,
    percentageBuffered: React.PropTypes.number,
    percentagePlayed: React.PropTypes.number,
    duration: React.PropTypes.number
};
