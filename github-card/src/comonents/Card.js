import React from "react";

const Card = ({ user }) => {
  const { name, login, bio, location, avatar_url } = user;
  return (
    <div className="card">
      <img src={avatar_url} alt={login} />
      <h2>name: {name}</h2>
      <p>github name: {login}</p>
      <p>bio: {bio}</p>
      <p>location: {location}</p>
    </div>
  );
};

export default Card;
