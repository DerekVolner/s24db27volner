const mongoose = require("mongoose")
const rhinoSchema = mongoose.Schema({
rhino_species: String,
endangerment_status: String,
rhino_age: {
    type: Number,
    min: [0,'Rhino too young'],
    max: [57, 'Rhino is too old, and older then current oldest recorded Rhino Fausta']
}



})
module.exports = mongoose.model("Rhino", 
rhinoSchema)

