import React from 'react';
import TwitchEmbedVideo from "../../src/index";

export default class ChannelChange extends React.Component {
  constructor (props) {
      super(props);
      this.channels = ['talk2megooseman', 'lana_lux', 'noopkat', 'csharpfritz'];
      this.state = {value: this.randomChannel()};
  }

  randomChannel = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(this.channels.length));
    return this.channels[randomIndex];
  }

  onClick = () => {
    this.setState({value: this.randomChannel()});
  };

  render () {
      return (
          <div className={'row'}>
              <div className={'col-md-3'}>
                  <div className="page-header mc">
                      {this.state.value}
                  </div>
                  <div className="list-group sidebar">
                      <button onClick={this.onClick}>Click me</button>
                  </div>
              </div>
              <div className={'col-md-9  col-md-offset-3 text-center'}>
                  <TwitchEmbedVideo channel={this.state.value}/>
              </div>
          </div>
      );
  }
}
