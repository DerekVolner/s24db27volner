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
/*exports.rhinoSchema_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Rhino detail: ' + req.params.id);
};  */

exports.rhinoSchema_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await rhino.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
/*Handle Rhino delete from on DELETE.
exports.rhinoSchema_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Rhino delete DELETE ' + req.params.id);
};   */

// Handle Rhino delete on DELETE.
exports.rhinoSchema_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await rhino.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
   
/* Handle Rhino update form on PUT.
exports.rhinoSchema_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Rhino update PUT' + req.params.id);
};  */
exports.rhinoSchema_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await rhino.findById( req.params.id)
    // Do updates of properties
    if(req.body.rhino_species) 
    toUpdate.rhino_species = req.body.rhino_species;
    if(req.body.endangerment_status) toUpdate.endangerment_status = req.body.endangerment_status;
    if(req.body.rhino_age) toUpdate.rhino_age = req.body.rhino_age;
    if(req.body.checkboxsale) toUpdate.sale = true;
    else toUpdate.same = false
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
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


