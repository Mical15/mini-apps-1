const express = require('express')
var bodyParser = require('body-parser');
const { saveCheckOut } = require('./database');
const { updateCheckOut } = require('./database');

const app = express()
const port = 3000;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req,res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  console.log('POST route sucessful');
  // console.log("POST BODY " + JSON.stringify(req.body));
  saveCheckOut(req.body.name, req.body.email, req.body.password, req.body.address1, req.body.address2, req.body.city, 
    req.body.state, req.body.zipcode, req.body.phonenumber, req.body.ccn, req.body.expiration, req.body.cvv, req.body.billingzipcode);
  res.send('good');
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
