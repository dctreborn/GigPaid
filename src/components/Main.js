import React, {Component} from "react";

// import EmpProfile from "./EmpProfile";
// import TalentProfile from "./TalentProfile";
// // import Search from "./Search";
import Registration from "./Registration";
// import Nav from "./Nav";

class Main extends Component {
    constructor(){
        super();
        this.state = {
            searchTerm: "",
            userName: "",
            minHourly: 1,
            maxHourly: 50,
            //contract prices
            minContract: 100,
            maxContact: 1000,
            availability: [],
        };
        //binds
    }
    
    // componentDidMount(){

    // }

    // componentDidUpdate(){

    // }

    render() {
        return (
        <div className="container">
            {/*<Nav searchTerm={this.searchTerm}/>*/}
            {/*body*/}
            <div className="jumbotron">
                <h1>GigPaid</h1>
                <p>Show when you're available! Schedule a job! And get paid!</p>
            </div>

            {/*<Registration/>*/}
        </div>        
        );
    }
}

export default Main;