import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";

class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      // myData: [],
      userFollowers: [],
      followersInformation: [],
    };
  }

  getData = () => {
    console.log("fetching data...");
    axios
      .get(`https://api.github.com/users/anthonyamaro15`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          followersInformation: [...this.state.followersInformation, res.data],
        });
        //   console.log(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.github.com/users/anthonyamaro15/followers`)
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
    console.log("componentDidMount()");
    this.getData();
  }

  render() {
    //  console.log("rendering..");
    const { followersInformation } = this.state;
    console.log(followersInformation);
    return (
      <div className="card-parent">
        {followersInformation.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default MainApp;
