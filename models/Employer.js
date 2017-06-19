/*
Guideline
-Name
-Company Description
-URL
-Available jobs
-reviews, only talent that have done work for employers can review or rate upon success or fail
-ratings
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmployerSchema = new Schema({
	id: {
    	type: String
    },
    name: {
    	type: String
    },
    companyname: {
    	type: String
    },
    url: {
    	type: String
    },
    jobs: [{ 
  		title: {
  			type: String
  		},
  		description: {
  			type: String
  		},
  		date: {
  			type: Date
  		},
  		taken: {
  			type: Boolean
  		}
    }],
    meta: {
    	reviews: [{
    		id: {
    			type: String
    		},
    		reviewer: {
    			type: String
    		},
    		body: {
    			type: String
    		},
    		date: {
    			type: Date
    		}
    	}],
    	ratings: [{
    		value: {
    			type: Number
    		}
    	}]
    }
});

var Employer = mongoose.model("Employer", EmployerSchema);
module.exports = Employer;