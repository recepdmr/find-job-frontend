import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>

        <input onChange={this.setLocalName} />
        <button onClick={this.updateName}>Test</button>
      </div>
    );
  }

  updateName = () => {
    this.props.setName(this.state.name);
  };

  setLocalName = e => {
    this.setState({ name: e.target.value });
  };
}

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch({ type: "SET_NAME", name })
});

const mapStateToProps = state => {
  const { app } = state;
  return { name: app.name };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));