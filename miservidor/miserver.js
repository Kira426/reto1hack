
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})



var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  var randomCalle =faker.address.streetAddress();
  var randomConte= faker.lorem.sentence();
  var randomDia= faker.date.past();
  var randomId= faker.random.uuid();
  return {
    Id: randomId,
    Nombre: randomName,
    Contenido: randomConte,
    Fecha: randomDia,
    Imagen: randomImage,
  }

}

app.get('/mypost', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})


app.listen(3000);