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
exports.rhinoSchema_create_post  = async function(req, res) {
    console.log(req.body)
    let document = new rhino();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.rhino_species = req.body.rhino_species;
    document.rhino_age = req.body.rhino_age;
    document.endangerment_status = req.body.endangerment_status;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }
// Handle Rhino delete from on DELETE.
exports.rhinoSchema_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Rhino delete DELETE ' + req.params.id);
};
// Handle Rhino update form on PUT.
exports.rhinoSchema_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Rhino update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.rhinoSchema_view_all_Page = async function(req, res) {
    try{
        theRhinos = await rhino.find();
    res.render('rhino', { title: 'Rhino Search Results', results: theRhinos });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   

