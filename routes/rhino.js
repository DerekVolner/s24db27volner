var express = require('express');
const rhino_controllers= require('../controllers/rhinoSchema');
var router = express.Router();
const rhino_controllers_update= require('../controllers/update');
var passport = require('passport');

/* GET home page. */
router.get('/', rhino_controllers.rhinoSchema_view_all_Page );

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
      return next();
    }
    res.redirect("/login");
    }

/* GET update rhino page */
//router.get('/update', rhino_controllers_update.rhinoSchema_update_Page);


 /* GET update rhino page */
//router.get('resource/update/:id', secured, rhino_controllers_update.rhinoSchema_update_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });

//testing for horseshit
router.get('/resource/update/:id', secured, rhino_controllers_update.rhinoSchema_update_Page);




module.exports = router;
