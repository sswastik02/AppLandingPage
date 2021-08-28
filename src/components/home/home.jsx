import React, { Component } from 'react';
import "./home.css"
class Home extends Component {
    render() { 
        return ( 
            <div id="home">
                <div className="hero">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue eget
                <div className="herospace"></div>
                <div className="subhero">
                Praesent sagittis tempus consequat. Praesent venenatis dolor at magna volutpat ullamcorper. Cras
                </div>
                </div>
                <div className="installButtons">
                    <a href="#" className="android">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/android-os.png"/>
                    <div className="downtext">Download</div>
                    </a>
                    <a href="#" className="ios">
                    <img src="https://img.icons8.com/material-outlined/50/ffffff/mac-os--v2.png"/>
                    <div className="downtext">Download</div>
                    </a>
                </div>
                
            </div>
         );
    }
}
 
export default Home;