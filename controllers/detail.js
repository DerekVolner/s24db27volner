var rhino = require('../models/rhinoSchema');

// Handle a show one view with id specified by query
exports.rhinoSchema_view_one_page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await rhino.findById( req.query.id)
    res.render('rhinodetail', 
   { title: 'Rhino Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   