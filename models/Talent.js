/*
Guideline
-Id
-Name
-Job Title
-Services
-Skills
  --descriptions
-Certifications
  --title
  --img
-Previous jobs
  --title
  --responsibilities
  --left
    --when
    --why
  --references
    --name
    --contact
-Hourly price
-reviews, only employers that have done jobs with talent can review and rate upon success or fail
-ratings
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TalentSchema = new Schema({
	id: {
    	type: String
    },
    name: {
    	type: String
    },
    jobtitle: {
    	type: String
    },
    services: {
    	type: String
    },
    skills : [{
    	description: {
    		type: String
    	}
    }],
    certs: {
    	title: {
    		type: String
    	},
    	img: {
    		type: String
    	}
    },
    previousjobs: [{
    	title: {
    		type: String
    	},
    	responsibilities: [{
    		body: {
    			type: String,
    		}
    	}],
    	left: [{
    		when: {
    			type: Date
    		},
    		why: {
    			type: String
    		}
    	}],
    	references: [{
    		name: {
    			type: String
    		},
    		contact: {
    			type: String
    		}
    	}]
    }],
    hourly: {
    	type: Number
    },
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

var Talent = mongoose.model("Talent", TalentSchema);
module.exports = Talent;