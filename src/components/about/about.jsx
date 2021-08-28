import React, { Component } from "react";
import "./about.css";
import Aos from "aos"
import "aos/dist/aos.css"
class About extends Component {
    state={
        stack:window.innerWidth >= 1060 ? true : false
    }
    componentDidMount(){
        window.addEventListener('resize',this.formatStack)
        Aos.init({duration:2000})
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.formatStack)
    }
    formatStack=()=>{
        this.setState({
            stack:window.innerWidth >= 1060 ? true : false
        })
    }
  render() {
    return (
      <div className="about" id="about">
        <div className="aboutImage" data-aos="fade-up">
          <img
            src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
            alt="logo"
          />
        </div>
        {this.showStacked()}
      </div>
    );
  }
  showStacked(){
      let about_desc=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      sed augue eget felis faucibus feugiat eu ac arcu. Sed gravida nisl
      enim, id consectetur urna vulputate quis. Cras aliquet pellentesque
      lectus, non volutpat enim consectetur sed. In a luctus nisl. Aenean
      vel tortor sit amet lectus bibendum consequat. Cras dignissim
      bibendum lobortis. Etiam molestie massa vitae fermentum efficitur.
      Praesent sagittis tempus consequat. Praesent venenatis dolor at
      magna volutpat ullamcorper. Cras eu maximus enim. Sed massa arcu,`
      return this.state.stack? 
      <div className="aboutBody">
          <div className="aboutBodyTitle">About App</div>
          <div className="aboutBodyDesc" data-aos="fade-up">
            {about_desc}
          </div>
        </div>
        :
        <React.Fragment>
          <div className="aboutBodyTitle">About App</div>
          <div className="aboutBodyDesc" data-aos="fade-up">
            {about_desc}
          </div>
        </React.Fragment>
  }
}

export default About;
