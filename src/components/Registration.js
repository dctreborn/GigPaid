import React, {Component} from "react";

class Registration extends Component {
    render() {
        return (
            <div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">Registration</div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                {/*name*/}
                                    <div className="input-group">
                                        <div className="input-group-addon">Name</div>
                                        <input type="text" className="form-control" id="reg-name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                {/*email*/}
                                    <div className="input-group">
                                        <div className="input-group-addon">Email</div>
                                        <input type="text" className="form-control" id="reg-email"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                {/*account type*/}
                                    <div className="input-group">
                                        <div className="input-group-addon">Account Type</div>
                                        <select className="form-control">
                                            <option>Individual</option>
                                            <option>Employer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/*password*/}
                                    <div className="input-group">
                                        <div className="input-group-addon">Password</div>
                                        <input type="text" className="form-control" id="password"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/*password confirm*/}
                                    <div className="input-group">
                                        <div className="input-group-addon">Confirm Password</div>
                                        <input type="text" className="form-control" id="confirm-pw"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }
}

export default Registration;
