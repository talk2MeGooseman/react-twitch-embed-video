import React from 'react';
import TwitchEmbedVideo from "../../src/index";

export default class RerenderBug extends React.Component {
  constructor (props) {
      super(props);
      this.state = {value: 0};
  }

  componentDidMount () {
  }

  onClick = () => {
      this.setState({value: Math.random()});
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
                  <TwitchEmbedVideo channel="talk2megooseman"/>
              </div>
          </div>
      );
  }
}
