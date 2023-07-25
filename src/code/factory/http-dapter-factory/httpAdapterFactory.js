
// Base Product
class HttpAdapter {

  constructor(type) {
    this._type = type;
  }

  get() {
    console.log('Get - Method Not Implemented!');
  }

  post() {
    console.log('Post - Method Not Implemented!');
  }

  put() {
    console.log('Put - Method Not Implemented!');
  }

  delete() {
    console.log('Delete - Method Not Implemented!');
  }

  get type() {
    return this._type;
  }

}

// Concrete Product
class RestHttpAdapter extends HttpAdapter {

  constructor() {
    super('REST');
  }

  get() {
    console.log(`[${ this._type }] Get Method!`);
  }

  post() {
    console.log(`[${ this._type }] Post Method!`);
  }

  put() {
    console.log(`[${ this._type }] Put Method!`);
  }

  delete() {
    console.log(`[${ this._type }] Delete Method!`);
  }
  
}

// Base Factory
class HttpAdapterFactory {

  makeAdapter() {
    throw new Error('Method not implemented!');
  }

}

// Concrete factory
class RestHttpAdapterFactory extends HttpAdapterFactory {

  makeAdapter() {
    return new RestHttpAdapter();
  }

}

// Main function
function appFactory(factory) {
  console.log('--- [JS] Calling appFactory ---\n');

  if ( !factory ) {
    console.log('--- No factory provided ---');
    return;
  }

  const adapter = factory.makeAdapter();
  console.log(`Http Adapter is ${adapter.type}\n`);
  adapter.get();
  adapter.post();
  adapter.put();
  adapter.delete();
}

// implementaciones
appFactory();
appFactory(new RestHttpAdapterFactory());