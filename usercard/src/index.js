import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    // we would not have access to `this` w/out you super!
    this.state = {
      user: {},
      followers: [],
    };
  }
  // state = {}

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  fetchUser = async () => {
    let res = await axios.get(`https://api.github.com/users/marquesj8023`)
     this.setState({
       user: res.data
     }) 
  };

  fetchFollowers = async () => {
    let res = await axios.get(`https://api.github.com/users/marquesj8023/followers`)
     this.setState({
       followers: res.data
     }) 
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Users</h1>
        {this.state.followers.map(follower => (<h1>{follower.login}</h1>))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
