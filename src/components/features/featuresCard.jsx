import React, { Component } from 'react';
import "./features.css"
import Aos from "aos"
import "aos/dist/aos.css"
class FCard extends Component {
    componentDidMount(){
        Aos.init({
            duration:2000
        })
    }
    render() { 
        return ( 
            <div className="featureCardHolder" data-aos={this.props.aos}>
            <div className="featureCard" id={this.props.id}>
                <div className="featureTitle">
                    {this.props.name}
                </div>
                <div className="featureBody">
                {this.props.children}
                </div>
            </div>
            </div>
         );
    }
}
 
export default FCard;