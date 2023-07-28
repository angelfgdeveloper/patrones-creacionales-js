
// Paso 1. declarar una clase base para construir los productos
class CarProductionLine {

  setAirBags(airBagsNumber) {
    throw new Error('Method Not Implemented!');
  }

  setColor(color) {
    throw new Error('Method Not Implemented!');
  }

  setEdition(edition) {
    throw new Error('Method Not Implemented!');
  }

  resetProductionLine() {
    throw new Error('Method Not Implemented!');
  }

}

// Paso 2. Implementar builder concretos (productos concretos, interfaz o clase)
class SedanProductionLine extends CarProductionLine {

  constructor({ model }) {
    super(); // necesario para construir apartir de nuestra superclase
    this.setInternalModel(model);
    this.resetProductionLine();
  }
  
  setAirBags(howMany) {
    this.sedanCar.airBags = howMany;
    return this; // retornar la misma instancia
  }

  setColor(color) {
    this.sedanCar.color = color;
    return this; // retornar la misma instancia
  }

  setEdition(edition) {
    this.sedanCar.edition = edition;
    return this; // retornar la misma instancia
  }

  // metodo interno
  setInternalModel(model) {
    this.internalModel = model;
  }

  setModel() {
    // this.sedanCar.model = this.internalModel;
    this.sedanCar.model = 'sedan';
  }

  resetProductionLine() {
    this.sedanCar = this.internalModel === 'mastodon' ? new MastodonCar() : new RhinoCar();
  }

  build() {
    this.setModel();
    const sedanCar = this.sedanCar;
    this.resetProductionLine();
    return sedanCar;
  }

}

// Paso 3. implementar las clases correspondientes a los productos
class Car {

  constructor() {
    this._edition = '';
    this._model = '';
    this._airBags = 2;
    this._color = 'black';
  }

  setAirBags(howMany) {
    this._airBags = howMany;
  }

  setColor(color) {
    this._color = color;
  }

  setEdition(edition) {
    this._edition = edition;
  }

  setModel(model) {
    this._model = model;
  }

}

class MastodonCar extends Car {
  constructor() {
    super();
  }
}

class RhinoCar extends Car {
  constructor() {
    super();
  }
}

// Paso 4. Implementar la clase director, es le que decide como va a funcionar
class Director {

  setProductionLine(productionLine) {
    this.productionLine = productionLine;
  }

  constructCvtEdition() {
    // tipo recursion
    this.productionLine.setAirBags(4).setColor('blue').setEdition('CVT'); // es como regresara el this
    // this.productionLine.setColor('Azul');
    // this.productionLine.setEdition('CVT');
  }

  constructSignatureEdition() {
    this.productionLine.setAirBags(8).setColor('red').setEdition('Signature'); // es como regresara el this
  }

}

// Main
function appBuilder(director) {

  const mastodonSedanProductionLine = new SedanProductionLine({ model: 'mastodon' });

  director.setProductionLine(mastodonSedanProductionLine);
  director.constructCvtEdition();

  const mastodonSedanCvt = mastodonSedanProductionLine.build(); // construye ek vehiculo
  console.log(mastodonSedanCvt);

  // Otra construccion
  director.constructSignatureEdition();
  const mastodonSedanSignature = mastodonSedanProductionLine.build();
  console.log(mastodonSedanSignature);
  
}

appBuilder(new Director());


