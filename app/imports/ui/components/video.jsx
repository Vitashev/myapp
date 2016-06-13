import React, {Component, propTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import classnames from 'classnames';
import Nouislider from 'react-nouislider';

export default class Video extends TrackerReact(Component) {
    constructor(props) {
        super(props);
        this.slide = false;

        this.state = {
            progress: 0,
            duration: 1,
            isPlay: false,
            muted: false
        };
    }

    componentDidMount() {
    }

    onSliderUpdate(values){
        this.videoEl.currentTime = values[0];
        this.slide = false
    }

    onLoadedMetadata(){
        this.setState({
            duration: this.videoEl.duration
        });
        this.timeFormatStr = (parseInt(this.videoEl.duration) > 3600) ? 'H:mm:ss' : 'mm:ss';
    }

    formatTime(sec){
        return moment("2015-01-01").startOf('day')
            .seconds(sec)
            .format(this.timeFormatStr);
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
        console.log(this.sliderEl);
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
        console.log(value);
    }

    render() {
        return (
            <div>
            
            <div className="row">
                <div className="col s12 m7">
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
                                        range={{min: 0, max: 100}}
                                        start={[0]}
                                        connect={"lower"}
                                        step={1} />
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
