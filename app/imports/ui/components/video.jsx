import React, {Component, propTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import classnames from 'classnames';
import Nouislider from 'react-nouislider';

export default class Video extends TrackerReact(Component) {
    constructor(props) {
        super(props);
        this.slide = false;
        this.isPlay = false;
        this.state = {
            progress: 0,
            duration: 1,
        };
    }

    componentDidMount() {
    }

    onSliderUpdate(values, handle){
        this.videoEl.currentTime = values[0];
        this.slide = false
    }

    onLoadedMetadata(){
        this.setState({
            duration: this.videoEl.duration
        });
    }

    formatTime(sec){
        return moment("2015-01-01").startOf('day')
            .seconds(sec)
            .format('H:mm:ss');
    }

    onTimeUpdate() {
        if(!this.slide){
            this.setState({
                progress: this.videoEl.currentTime
            });
        }
    }

    play(){
        this.videoEl.play();
        this.isPlay = true;
    }
    pause(){
        this.videoEl.pause();
        this.isPlay = false;
    }

    onSlide() {
        if(!this.slide){
            this.slide = true;
        }
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
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col s1"><span>{this.formatTime(this.state.progress)}</span></div>
                        <div className="col s10">
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
                        <div className="col s1"><span>{this.formatTime(this.state.duration)}</span></div>
                    </div>
                    <div className="card-action">
                        {(() => {
                            if (!this.isPlay) {
                                return <a href="#!"><i className="material-icons circle small waves-effect waves-grey teal-text" onClick={this.play.bind(this)}>play_arrow</i></a>;
                            }
                            else {
                                return <a href="#!"><i className="material-icons circle small waves-effect waves-grey teal-text" onClick={this.pause.bind(this)}>pause</i></a>
                            }
                        })()}
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
