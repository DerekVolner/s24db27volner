var express = require('express');
const rhino_controllers= require('../controllers/rhinoSchema');
var router = express.Router();

/* GET home page. */
router.get('/', rhino_controllers.rhinoSchema_view_all_Page );

module.exports = router;
