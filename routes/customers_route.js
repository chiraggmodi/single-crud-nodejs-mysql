var express = require('express'),
    router = express.Router(),
    customers = require('./customers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('customers', customers.list);
});

router.get('/customers/add', function(req, res, next) {
  res.render('customers', customers.add);
});

router.post('/customers/add', function (req, res) {
  res.send(customers.save)
})

router.get('/customers/delete/:id', function(req, res, next) {
  res.render('customers', customers.delete_customer);
});

router.get('/customers/edit/:id', function(req, res, next) {
  res.render('customers', customers.edit);
});

router.post('/customers/edit/:id', function (req, res) {
  res.send(customers.save_edit)
})

module.exports = router;
