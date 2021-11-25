import React, { Component } from "react";
 
import Navbar from "reactjs-navbar";
import logo from "./test.png";
import Loader from "react-loader-spinner";
import "reactjs-navbar/dist/index.css";
import './style.css';
 
class App extends Component {
  state = {
    isLoading: false,
  };
 
  render() {
    return (
      <Navbar
        logo={logo}
        loader={<Loader type="Puff" color="#000000" height={25} width={25} />}
        isLoading={this.state.isLoading}
        menuItems={[
            {
            title: "Andika Pratama",
            isAuth: true,
            
          },
        ]}
      />
    );
  }
}

export default App
