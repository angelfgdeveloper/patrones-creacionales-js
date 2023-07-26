

// Paso 1 Crear clase o interfaces base de las familias
class MastodonCar {

  useGPS() {
    throw new Error('Method Not Implemented!');
  }
  
}

class RhinoCar {

  useGPS() {
    throw new Error('Method Not Implemented!');
  }

}

// Paso 2 Implementar los productos concretos
class MastodonSedanCar extends MastodonCar {

  useGPS() {
    console.log(`[SEDAN] Mastodon GPS`);
  }

}

class MastodonHatchbackCar extends MastodonCar {

  useGPS() {
    console.log(`[HATCHBACK] Mastodon GPS`);
  }

}

class RhinoSedanCar extends RhinoCar {

  useGPS() {
    console.log(`[SEDAN] Rhino GPS`);
  }

}

class RhinoHatchbackCar extends RhinoCar {

  useGPS() {
    console.log(`[HATCHBACK] Rhino GPS`);
  }

}

// Paso 3 declarar abstract factory para cada producto
class CarAbstractFactory {

  createMastodon() {
    throw new Error('Method Not Implemented!');
  }

  createRhino() {
    throw new Error('Method Not Implemented!');
  }

}

// Paso 4 Crear fabricas concretas
class SedanCarFactory extends CarAbstractFactory {

  createMastodon() {
    return new MastodonSedanCar();
  }

  createRhino() {
    return new RhinoSedanCar();
  }

}

class HatchbackCarFactory extends CarAbstractFactory {

  createMastodon() {
    return new MastodonHatchbackCar();
  }

  createRhino() {
    return new RhinoHatchbackCar();
  }

}

// Main
function appCarFactory(factory) {
  const mastodon = factory.createMastodon();
  const rhino = factory.createRhino();

  mastodon.useGPS();  
  rhino.useGPS();  
}

// appCarFactory(new HatchbackCarFactory());
// appCarFactory(new SedanCarFactory());

// abstraccion extra
function createFactory(type) {
  const factories = {
    sedan: SedanCarFactory,
    hatchback: HatchbackCarFactory,
  }

  const Factory = factories[type];

  return new Factory();
}

appCarFactory(createFactory('sedan'));
appCarFactory(createFactory('hatchback'));

