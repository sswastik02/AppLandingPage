import "./contact.css";
import React, { Component } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
class ContactUs extends Component {
  componentDidMount(){
    Aos.init({duration:2000})
  }
  render() {
    return (
      <div className="contactUs" id="contact">
        <div className="contactUsHeader">
          <h1>Contact Us</h1>
        </div>
        <div className="contactUsBody">
          <div className="location" data-aos="fade">
            <div className="locationIcon">
            <img src="https://img.icons8.com/wired/64/ffffff/user-location.png" height="50px"/>
            </div>
            <div className="locationText">
                Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
              </div>
          </div>
          <div className="mail" data-aos="fade">
              <div className="mailIcon">
              <img src="https://img.icons8.com/material-outlined/64/ffffff/mail.png" height="50px"/>
              </div>
              <div className="mailText">
                  example123@gmail.com
              </div>
          </div>
          <div className="phone" data-aos="fade">
              <div className="phoneIcon">
              <img src="https://img.icons8.com/ios/50/ffffff/phone.png" height="50px"/>
              </div>
              <div className="phoneText">
                    +91 1234567890
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
