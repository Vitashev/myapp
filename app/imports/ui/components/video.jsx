import React, {Component, propTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Video extends TrackerReact(Component) {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0
        };
    }


    componentDidMount() {
        console.log(this.videoEl.currentTime);
    }

    setTime() {
        this.setState({
            progress: this.videoEl.currentTime
        });
        //console.log(this.videoEl.currentTime);
    }

    onChange(event) {
        this.videoEl.currentTime = event.target.value;
        this.setState({
            progress: event.target.value
        });
    }

    render() {

        return (
            <div>
            
            <div className="row">
                <div className="col s12 m7">
                  <div className="card">
                    <div className="card-image">
                    
                        <video className="card-video"
                            ref={(el) => {
                                this.videoEl = el;
                            }}
                    
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
                        <div className="col s2">
                            <a href="#"><i className="zmdi zmdi-play zmdi-hc-2x waves-effect waves-teal"></i></a>
                        </div>
                        <div className="col s10">
                        


                        
                        
                            <div className="range-field">
                            <input type="range" min="0" max="100" ref="input" value={this.state.progress} onChange={this.onChange.bind(this)} 
                               step="1" />
                            </div>
                        </div>
                        
                        
                        

                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
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
