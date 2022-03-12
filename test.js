var Boisson = function (nom, cout) {
  this.nom = nom;
  this.cout = parseInt(cout);

  this.prix = function () {
    return cout;
  };
};

var Incrediant = function (nom, cout, boisson) {
  this.nom = boisson.nom + " au " + nom;
  this.cout = parseInt(cout);
  this.boisson = boisson;

  this.prix = function () {
    var prixTotal = parseInt(boisson.prix()) + parseInt(cout);
    return prixTotal;
  };
};

var b = new Boisson("Expresso", 10);
b = new Incrediant("Caramelle", 5, b);
b = new Incrediant("Caramelle", 1, b);

console.log(b.prix());
