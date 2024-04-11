// Handle building the view for updating a costume.
// query provides the id
var rhinoUpdate = require('../models/rhinoSchema');

exports.rhinoSchema_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await rhinoUpdate.findById(req.query.id)
    res.render('rhinoupdate', { title: 'Rhino Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }