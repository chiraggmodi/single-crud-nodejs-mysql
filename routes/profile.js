var express = require('express'),
    router = express.Router(),
    profile = require('../controller/profile');

// Profile Routing List
router.get('/', profile.list);
router.get('/add', profile.add);
router.post('/add', profile.save);
router.get('/delete/:id', profile.delete);
router.get('/edit/:id', profile.edit);
router.post('/edit/:id', profile.save_edit);
router.get('/view/:id', profile.view);
module.exports = router;
