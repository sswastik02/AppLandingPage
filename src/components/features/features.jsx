import React, { Component } from "react";
import gif from "./anmedited.gif";
import "./features.css";
import FCard from "./featuresCard";
import Aos from "aos"
import "aos/dist/aos.css"
class Features extends Component {
  state = {
    showAnimation: window.innerWidth > 950 ? true : false,
  };
  componentDidMount() {
    Aos.init({duration:2000})
    window.addEventListener("resize", this.formatAnimation);
    window.addEventListener("resize",this.formatFeatureFade)  
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.formatAnimation);
    window.addEventListener("resize",this.formatFeatureFade);

  }
  formatAnimation = () => {
    this.setState({
      showAnimation: window.innerWidth > 950 ? true : false,
    });
  };
  formatFeatureFade = () => {
    this.setState({
      feature2: window.innerWidth > 610 ? "right" : "left",
      feature3: window.innerWidth > 610 ? "left" : "right",
    });
  };
  render() {
    return (
      <div id="features">
        <div className="featureCards" id="1">
          <FCard name="feature 1" id="featureCard1" aos={"fade-"+"right"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            imperdiet ante. Pellentesque pharetra mauris sagittis, iaculis elit
          </FCard>
          <FCard name="feature 2" id="featureCard2" aos={"fade-"+ (this.state.showAnimation ? "right":"left")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            imperdiet ante. Pellentesque pharetra mauris sagittis, iaculis elit
          </FCard>
        </div>
        {this.mobileHolder()}
        <div className="featureCards" id="2">
          <FCard name="feature 3" id="featureCard3" aos={"fade-"+ (!this.state.showAnimation ? "right":"left")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            imperdiet ante. Pellentesque pharetra mauris sagittis, iaculis elit
          </FCard>
          <FCard name="feature 4" id="featureCard4" aos={"fade-"+"left"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            imperdiet ante. Pellentesque pharetra mauris sagittis, iaculis elit
          </FCard>
        </div>
      </div>
    );
  }
  mobileHolder() {
    return this.state.showAnimation ? (
      <div className="mobileHolder" data-aos="fade-up">
        <img src={gif} alt="mobAnimation" className="animation" />
      </div>
    ) : (
      <React.Fragment />
    );
  }
}

export default Features;
