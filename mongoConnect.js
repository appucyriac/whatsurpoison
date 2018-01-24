const express = require('express');
const MongoClient = require("mongodb").MongoClient;
let app = express();
const MONGO_URL =
  "mongodb://admin:Missyoubro1*@ds211588.mlab.com:11588/whatsurpoison-db";

MongoClient.connect(MONGO_URL, (err, client) => {
    const db = client.db("whatsurpoison-db");
  if (err) {
    return console.log(err);
  }

  // Do something with db here, like inserting a record
  db.collection("users").insertOne(
    {
      title: "Hello MongoDB",
      text: "Hopefully this works!"
    },
    function(err, res) {
      if (err) {
        client.close();
        return console.log(err);
      }
      // Success
      client.close();
    }
  );
  var port = process.env.PORT || 8082;
app.listen(port, function() {
  console.log('Node.js listening on port ' + port);
  })
});