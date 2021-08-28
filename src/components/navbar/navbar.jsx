import React, { Component } from "react";
import NavBtn from "./navButton";
import "./navbar.css";
import HamMenu from "./hamburger";
class Navbar extends Component {
  state = {
    menuActive: window.innerWidth > 960 ? true : false,
    showDropDown:false
  };
  componentDidMount() {
    window.addEventListener("resize", this.formatMenuActive);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.formatMenuActive);
  }
  formatMenuActive = () => {
    this.setState({
      menuActive: window.innerWidth > 960 ? true : false,
    });
  };
  render() {
    return (
      <nav>
        <div className="navlogo">
          <img
            src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
            alt="logo"
            height="100px"
          />
        </div>
        {this.checkShowMenu()}
        {this.showHamMenu()}
      </nav>
    );
  }
  formatNavStyle(){
      if(window.scrollY < 10)
      return {
          background:"transparent"
      }
      return {
          background:"white"
      }
  }
  checkShowMenu() {
    if (this.state.showDropDown || this.state.menuActive) {
      return (<div className="navmenu">
        <NavBtn value="home" onClick={this.toggleHamMenu}>Home</NavBtn>
        <NavBtn value="about" onClick={this.toggleHamMenu}>About</NavBtn>
        <NavBtn value="features" onClick={this.toggleHamMenu}>Features</NavBtn>
        <NavBtn value="contact" onClick={this.toggleHamMenu}>Contact Us</NavBtn>
      </div>)
    }
    return <div className="navmenu_inactive"></div>

  }
  toggleHamMenu=()=>{
      this.setState({
          showDropDown:!this.state.showDropDown
      })
  }
  showHamMenu() {
    if (this.state.menuActive) return <div className="blankNav"></div>;
    return <HamMenu onClick={this.toggleHamMenu} clicked={this.state.showDropDown}/>;
  }
}

export default Navbar;
