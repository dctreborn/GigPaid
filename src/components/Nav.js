import React from "react";

const Nav = ()=>{
    return (
        <div className="ui attached stackable menu">
            <div className="ui container">
                <a className="item">
                    <i className="home icon"></i> Home
                </a>
                <a className="item">
                    <i className="mail icon"></i> Messages
                </a>
                <div className="right item">
                    <div className="ui input"><input type="text" placeholder="Search..."/>{this.props.searchTerm}</div>
                </div>
            </div>
        </div>
    );
};

export default Nav;