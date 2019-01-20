import React, { Component } from "react";
import gameboard from "./components/gameboard";
import score from "./components/score";
import status from "./components/status";
import wrapper from "./components/wrapper";
import images from "./images.json";
import "./App.css";

//render section
/////////////////////
/////////////////////
render(); {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
}