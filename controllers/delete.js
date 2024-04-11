// Handle a delete one view with id from query
var rhinoDelete = require('../models/rhinoSchema');

exports.rhino_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await rhinoDelete.findById(req.query.id)
    res.render('rhinodelete', { title: 'Rhino Delete', toShow: 
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };