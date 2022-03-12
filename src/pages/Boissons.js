export var Boisson = function (nom, cout) {
  this.nom = nom;
  this.cout = parseInt(cout);

  this.prix = function () {
    return cout;
  };
};

export var Incrediant = function (nom, cout, boisson) {
  this.nom = boisson.nom + ' au '+ nom;
  this.cout = parseInt(cout);
  this.boisson = boisson;

  this.prix = function () {
    var prixTotal = parseInt(boisson.prix()) + parseInt(cout);
    return prixTotal;
  };
};
