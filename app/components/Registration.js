import React, {Component} from "react";

class Registration extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui block header">Registration</div>
                {/*name, individual/organization, email/contact, password*/}
                <div className="row labeled input">
                    <div className="ui label">Name</div>
                    <input type="text"/>
                </div>
                <div className="row dropdown">
                    <option value="">Account Type</option>
                    <option value="talent">Individual</option>
                    <option value="employer">Employer</option>
                </div>                
                <div className="row labeled input">
                    <div className="ui label">Email</div>
                    <input type="text"/>
                </div>
                <div className="row labeled input">
                    <div className="ui label">Password</div>
                    <input type="text"/>
                </div>
                <div className="row labeled input">
                    <div className="ui label">Confirm Password</div>
                    <input type="text"/>
                </div>
            </div>
        );
    }
}

export default Registration;
