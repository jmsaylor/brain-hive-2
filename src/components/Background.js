import React, { Component } from "react";

class Background extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  state = {
    red: 255,
    green: 33,
    blue: 99,
  };

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");

    let color = `rgb(${this.state.red},${this.state.green},${this.state.blue})`;

    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}

export default Background;
