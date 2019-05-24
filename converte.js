var firebase = require("firebase")

var config = {
    apiKey: "AIzaSyAmz8rGI01eIUGAc5nM40IjdPIdCH3s0u8",
    authDomain: "banco-bed46.firebaseapp.com",
    databaseURL: "https://banco-bed46.firebaseio.com",
    projectId: "banco-bed46",
    storageBucket: "banco-bed46.appspot.com",
    messagingSenderId: "42293200054"
};

firebase.initializeApp(config);

var parseString = require('xml2js').parseString;
var https = require('https');

function xmlToJson(url, callback) {
  var req = https.get(url, function(res) {
    var xml = '';
    
    res.on('data', function(chunk) {
      xml += chunk;
    });

    res.on('error', function(e) {
      callback(e, null);
    }); 

    res.on('timeout', function(e) {
      callback(e, null);
    }); 

    res.on('end', function() {
      parseString(xml, function(err, result) {
        callback(null, result);
      });
    });
  });
}


var url = "https://noticiahoje.net/feed/";
cod = null;
var noticias;

xmlToJson(url, function(err, data) {
  if (err) {
    return console.err(err);
  } else {
    noticias = data['rss']['channel'][0]['item'];

    for (var x = 0; x < noticias.length; x++){
      console.log("------------------------------------");
      noticia = noticias[x];
      novaNoticia = {
        titulo: noticia["title"][0],
        pubDate: noticia["pubDate"][0],
        descricao: noticia["description"][0],
        guid: JSON.stringify(noticia["guid"][0]["_"]).split("p=")[1]
      }
      let newNoticia = firebase.database().ref(`noticias/${novaNoticia.guid}`);
      newNoticia.update({
        titulo: novaNoticia.titulo,
        pubDate: novaNoticia.pubDate,
        descricao : novaNoticia.descricao,
        guid: novaNoticia.guid
      });
      console.log(novaNoticia);
    }
  }
});
