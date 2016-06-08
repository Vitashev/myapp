import React, {Component, propTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//import noUiSlider from 'meteor/markoshust:nouislider';
import Nouislider from 'react-nouislider';

export default class Video extends TrackerReact(Component) {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            duration: 1
        };
    }



    componentDidMount() {

    }

    updateSlider(values, handle){
        this.videoEl.currentTime = values[0];
        console.log(values[0]);
    }

    setDuration(){
        this.setState({
            duration: this.videoEl.duration
        });
    }

    setTime() {
        this.setState({
            progress: this.videoEl.currentTime
        });
        //console.log(this.videoEl.currentTime);
    }

    play(){
        this.videoEl.play();
    }
    pause(){
        this.videoEl.pause();
    }

    onChange(event) {
        this.videoEl.currentTime = event.target.value;
        this.setState({
            progress: event.target.value
        });
    }

    render() {
        //console.log(this.videoEl.duration);

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
                            onLoadedMetadata={this.setDuration.bind(this)}
                            poster={this.props.poster}
                            onTimeUpdate={this.setTime.bind(this)}>
                            <source src={this.props.src} type="video/mp4"/>
                        </video>
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    
                    <div className="row">
          
                        <div className="col s12">
                            <Nouislider onChange={this.updateSlider.bind(this)}
                                range={{min: 0, max: this.state.duration}}
                                start={[this.state.progress]}
                                connect={"lower"}
                                tooltips
                            />
                        </div>
                        
                        
                        

                    </div>
                    <div className="card-action teal-text">
                      <a href="#!" className="waves-effect waves-grey lighten-5 btn-flat circle"><i className="material-icons" onClick={this.play.bind(this)}>play_arrow</i></a>
                      <a href="#!" className="waves-effect waves-teal"><i className="material-icons" onClick={this.pause.bind(this)}>pause</i></a>

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
