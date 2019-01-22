import React, { Component } from "react";
import gameboard from "./components/gameboard";
import score from "./components/score";
import status from "./components/status";
import Wrapper from "./components/Wrapper";
import imagesData from "./images.json";
import "./App.css";

class App extends Component{
    state = {
        images: []
    }
    componentDidMount(){
        this.setState({ images: imagesData});
    }

    render() {
        return (
          <Wrapper>
    
            {this.state.images.map(character => (
              <Gameboard
                image={character.image}
              />
            ))}
          </Wrapper>
        );
    }
}




export default App;