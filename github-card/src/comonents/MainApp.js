import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";

class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
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
          myData: res.data,
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
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this.getData();
    //  this.getFollowersData();
  }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdata()");
  //     //  this.state.userFollowers.forEach((user) => {
  //     //    axios.get(`https://api.github.com/users/${user}`).then((res) => {
  //     //      this.setState({
  //     //        followersInformation: [
  //     //          ...this.state.followersInformation,
  //     //          res.data,
  //     //          this.state.myData,
  //     //        ],
  //     //      });
  //     //    });
  //     //  });
  //     //  console.log(this.state);
  //   }

  render() {
    console.log("rendering..");
    return (
      <div className="card-parent">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default MainApp;
