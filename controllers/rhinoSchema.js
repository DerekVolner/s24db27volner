var rhino = require('../models/rhinoSchema');
// List of all rhinos
exports.rhinoSchema_list = async function(req, res) {
    try{
    theRhinos = await rhino.find();
    res.send(theRhinos);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }

}

// for a specific rhino.
exports.rhinoSchema_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Rhino detail: ' + req.params.id);
};
// Handle Rhino create on POST.
exports.rhinoSchema_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Rhino create POST');
};
// Handle Rhino delete from on DELETE.
exports.rhinoSchema_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Rhino delete DELETE ' + req.params.id);
};
// Handle Rhino update form on PUT.
exports.rhinoSchema_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Rhino update PUT' + req.params.id);
};


