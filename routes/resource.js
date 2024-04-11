var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var rhino_controller = require('../controllers/rhinoSchema');
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
///* GET detail costume page */
router.get('/detail', rhino_controller.rhinoSchema_view_one_page);
//commented this out because it was causing issues after trying to fix stuff?
// GET request for list of all rhino items.
router.get('/rhinoSchema', rhino_controller.rhinoSchema_list);

module.exports = router;