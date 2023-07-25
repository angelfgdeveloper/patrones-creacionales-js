
class Singleton {

  static instance = undefined;

  constructor(version) {
    this.version = version;
  }

  static getInstance(version) {

    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }

    return Singleton.instance;
  }

}

function appSingleton() {

  const singleton1 = Singleton.getInstance('version-1');
  const singleton2 = Singleton.getInstance('version-2');
  const singleton3 = Singleton.getInstance('version-3');

  console.log('Los singleton1 es igual a singleton2', singleton1 === singleton2);
  console.log('Los singleton1 es igual a singleton3:', singleton1 === singleton3);

}

appSingleton();