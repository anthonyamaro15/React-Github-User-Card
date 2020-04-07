import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";
import MainForm from "./Form";

class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      name: "anthonyamaro15",
      userFollowers: [],
      followersInformation: [],
    };
  }

  getData = () => {
    axios
      .get(`https://api.github.com/users/${this.state.name}`)
      .then((res) => {
        this.setState({
          followersInformation: [...this.state.followersInformation, res.data],
        });
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.github.com/users/${this.state.name}/followers`)
      .then((res) => {
        const loginInfo = res.data.map((info) => info.login);
        this.setState({
          userFollowers: loginInfo,
        });
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      this.state.userFollowers.forEach((user) => {
        axios.get(`https://api.github.com/users/${user}`).then((res) => {
          console.log(res.data);
          this.setState({
            followersInformation: [
              ...this.state.followersInformation,
              res.data,
            ],
          });
        });
      });
    }, 1000);
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
    if (!this.state.name === "anthonyamaro15") {
      this.getData();
    }
  }

  handleChange = (value) => {
    this.setState({
      name: value,
    });
  };

  render() {
    const { followersInformation } = this.state;
    return (
      <div>
        <MainForm handleChange={this.handleChange} />
        <div className="card-parent">
          {followersInformation.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainApp;
