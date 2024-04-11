var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var rhino_controller = require('../controllers/rhinoSchema');
var detail_controller = require('../controllers/detail');
var create_controller =  require('../controllers/create');
var update_controller =  require('../controllers/update');
var delete_controller= require('../controllers/delete');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// RHINO ROUTES ///
// POST request for creating a rhino. 
router.post('/rhinoSchema', rhino_controller.rhinoSchema_create_post);
// DELETE request to delete rhino.
router.delete('/rhinoSchema/:id', rhino_controller.rhinoSchema_delete);
// PUT request to update rhino.
router.put('/rhinoSchema/:id', rhino_controller.rhinoSchema_update_put);
// GET request for one rhino.
router.get('/rhinoSchema/:id', rhino_controller.rhinoSchema_detail);
//start of weird stuff from part 12
///* GET detail costume page */
router.get('/detail', detail_controller.rhinoSchema_view_one_page);
/* GET create rhino page */
router.get('/create', create_controller.rhinoSchema_create_Page)
/* GET create update page */
router.get('/update', update_controller.rhinoSchema_update_Page)
/* GET delete costume page */
router.get('/delete', delete_controller.rhino_delete_Page)


//commented this out because it was causing issues after trying to fix stuff?
// GET request for list of all rhino items.
router.get('/rhinoSchema', rhino_controller.rhinoSchema_list);

module.exports = router;