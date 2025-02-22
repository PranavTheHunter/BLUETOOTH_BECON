const mongoose = require('mongoose');

const BeconSchema = new mongoose.Schema({
    Bname: { type: String},
    Description: { type: String}
    
});

module.exports = mongoose.model("Becon", BeconSchema);
