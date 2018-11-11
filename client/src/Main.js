import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      response: false
    };
  }
  componentDidMount() {
    const socket = socketIOClient();
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <p>
              Received Socket Data: {response}
            </p>
          : <p>Loading...</p>}
      </div>
    );
  }
}
export default Main;
