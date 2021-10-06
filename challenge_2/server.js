var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var _ = require('underscore');


var upload = multer({ storage: storage });

const port = 3000;

app.use(express.static('./client'));
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('hello');
});

var converter = function (input) { // For this converter, my debugger stopped working, and I couldn't figure out how to import lodash into Dev Tools so I took the long route :(
  var keys = Object.keys(input).slice(0,6);
  var valuesArray = [];
  var finalString = keys.join(",") + "\n";

  var getValues = function (input) {
    var tempArray = []
    if (typeof input === 'object') {

      for (var key in input) {
        tempArray.push(input[key])
        if (typeof input[key] === 'object') {
          valuesArray.push(tempArray);
 
          getValues(input[key]);
        }
      }
    } else {
      for (var i = 0; i < input.length; i++) {
        getValues(input[i]);
      }
    }  
  }; 

  getValues(input);
  var finalValues = [];
  for (var i = 0; i < valuesArray.length; i++) {
      valuesArray[i].splice(-1,1);
      if (i % 2 === 0) {
        finalValues.push(valuesArray[i]);
      }
  }

  var valueString = ''
  for (var i = 0; i < finalValues.length; i++) {
      var tempString = '';
      tempString = finalValues[i].join(',');
      valueString += tempString + '\n';
  }

  finalString += valueString;
  return finalString;
};


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})


app.post('/', upload.single('fileinput'), function (req, res) {
  const file = req.file;

  const multerText = Buffer.from(file.buffer).toString("utf-8");

  var objJSON = JSON.parse(multerText);
  var convertedCSV = converter(objJSON);
  console.log(convertedCSV);


  try {
    const data = fs.writeFileSync('JSON.csv', convertedCSV)
  } catch (err) {
    console.error(err)
  }
  res.end();
  console.log('POST recieved sucessfully!')
});


app.get('/download', function (req, res) {
  const filePath = `/Users/michaelgallien/HackReactor/rpt27-mini-apps-1/challenge_2/JSON.csv`;
  res.download(filePath, 'JSON.csv');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});