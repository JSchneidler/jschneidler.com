import React, { Component } from "react";
import PropTypes from "prop-types";

class Typewriter extends Component {
  state = {
    text: '',
    showCursor: false,
  }

  componentDidMount() {
    const text = this.props.text;
    const delay = this.props.delay;

    let i = 0;

    const typeTimer = setInterval(() => {
      i += 1;
      if (i === text.length) {
        clearInterval(typeTimer);
      } else this.setState({ text: text.slice(0, i + 1) });
    }, delay);

    setInterval(() => {
      this.setState({ showCursor: !this.state.showCursor });
    }, 500);
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className} style={this.props.style}>
        <span>{this.state.text}</span>
        {<span style={{ opacity: this.state.showCursor ? 1 : 0 }}>|</span>}
      </div>
    );
  }
}

Typewriter.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
};

Typewriter.defaultProps = {
  text: '',
  delay: 75,
};

export default Typewriter;