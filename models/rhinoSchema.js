const mongoose = require("mongoose")
const rhinoSchema = mongoose.Schema({
rhino_species: String,
endangerment_status: String,
rhino_age: Number
})
module.exports = mongoose.model("Rhino", 
rhinoSchema)

