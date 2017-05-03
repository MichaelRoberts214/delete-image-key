'use strict';

const fs = require('fs');
const options = {
  "encoding": "utf8",
  "flag": "r"
};

const key = process.env.KEY_TO_DELETE || 'image';

// read file serialized_cx_data.json
let data = fs.readFileSync('./serialized_cx_data.json', options);

// parse json
data = JSON.parse(data);

// delete "image" key
if (data.hasOwnProperty(key)) {
  delete data.image;
}
if (data.hasOwnProperty('panel')) {
  if (data.panel.hasOwnProperty(key)) {
    delete data.panel.image;
  }
}

// json.stringify
data = JSON.stringify(data);

// write file imageless_cx_data.json
fs.writeFileSync('./imageless_cx_data.json', data);
