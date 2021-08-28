import React, { Component } from 'react';
class NavBtn extends Component {
    
    render() { 
        let name = this.props.value
        return ( 
            <a href={"#"+name} onClick={this.props.onClick}><button id={name+"_anchor"}><span className={name+"_grad"}></span>{this.props.children}</button></a>
         );
    }
}
 
export default NavBtn;