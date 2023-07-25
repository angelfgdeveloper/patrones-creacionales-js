

 // Paso 1. Clase base con metodo
class BaseCar {

  showCost() {
    throw new Error('Method not implemented!');
  }

}

// Paso 2. Heredar a nuestros products de car
class MastodonCar extends BaseCar {

  showCost() {
    console.log('Mastodon Car Cost: 300,000 MXN');
  }

}

class RhinoCar extends BaseCar {

  showCost() {
    console.log('RhinoCar Car Cost: 100,000 MXN');
  }

}

// Paso 3. Emular al metodo abstracto
class CarFactory {

  makeCar() {
    throw new Error('Method not implemented!');
  }

}

// Paso 4. regresamos las clases concretas de los productos
class MastodonCarFactory extends CarFactory {

  makeCar() {
    return new MastodonCar(); // Son BaseCar();
  }

}

class RhinoCarFactory extends CarFactory {

  makeCar() {
    return new RhinoCar(); // Son BaseCar();
  }

}


/** Implementacion del Factory */
function appFactory(factory) { // La funsion no sabe cual instancia le mandamos
  const car = factory.makeCar();
  car.showCost();
}

// Cuando implementemos este patron, debemos usar una Factory de la instancia
// appFactory(new MastodonCarFactory());
// appFactory(new RhinoCarFactory());

// Extras para mejorar la adicion de nuevas instancias de tipo factory
function createFactory(type) {

  const factories = {
    mastodon: MastodonCarFactory,
    rhino: RhinoCarFactory
  };

  const Factory = factories[type];
  return new Factory();
}

appFactory(createFactory('mastodon'));
appFactory(createFactory('rhino'));
