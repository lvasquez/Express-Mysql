var express = require('express'),
    path = require('path'),
    http = require('http');
    customer = require('./routes/customers');

var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); 

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());  // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

// Http Methods
app.get('/customers', customer.findAll);
app.get('/customers/:id', customer.findById);
app.post('/customers', customer.addCustomer);
app.put('/customers/:id', customer.updateCustomer);
app.delete('/customers/:id', customer.deleteCustomer);

app.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
