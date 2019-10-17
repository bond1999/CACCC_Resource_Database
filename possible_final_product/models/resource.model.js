const mongoose = require('mongoose');


var resourceSchema = new mongoose.Schema({
 resourceType: String,
 resourceName: String,
 resourcePhone: String,
 resourceAddress: String,
 resourceCity: String,
 resourceState: String,
 resourceZip: String,
 resourceHours: String,
 resourceWebsite: String,
 resourceServices: String,
 resourceLink: String
});

mongoose.model('resource',resourceSchema);
