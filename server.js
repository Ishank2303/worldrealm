const express = require("express");
var axios = require("axios");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
console.log(path.join(__dirname,'public'));
return res.sendFile('public/index.html',{root : __dirname});

})

app.get("/searchword", (req, res) => {
  
console.log(req.query)

var options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/definition/',
  params: {entry: req.query.entry},
  headers: {
    // u have to add ur api key here
  }
};

axios.request(options).then(function (response) {
res.json(response.data);
}).catch(function (error) {
  console.error(error);
});

// let response = {}
// response.data = 
//     {
//         entry: 'calm',
//         request: 'calm',
//         response: 'calm',
//         meaning: {
//           noun: '(nou) steadiness of mind under stress\n' ,
//           verb: '(vrb) make calm or still\n' +
//             '(vrb) make steady\n',
//           adverb: '',
//           adjective: '(adj) not agitated; without losing self-possession\n' 
//         },
//         ipa: 'kɑːm',
//         version: '7.5.7',
//         author: 'twinword inc.',
//         email: 'help@twinword.com',
//         result_code: '200',
//         result_msg: 'Success'

// }


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}- http://localhost:3000`);
});
