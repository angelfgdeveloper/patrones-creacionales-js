

// Base Products
class CPU {

  setSeries(serie) {
    throw new Error('Method Not Implemented!');
  }

}

class Memory {

  setCapacity(capacity) {
    throw new Error('Method Not Implemented!');
  }

}

class Display {

  setResolution() {
    throw new Error('Method Not Implemented!');
  }

}

// Concrete Products

/** CPU */
class PhoneCPU extends CPU {

  setSeries(serie) {
    console.log(`[PHONE] ${serie}`);
  }

}

class LaptopCPU extends CPU {

  setSeries(serie) {
    console.log(`[LAPTOP] ${serie}`);
  }

}

class TabletCPU extends CPU {

  setSeries(serie) {
    console.log(`[TABLET] ${serie}`);
  }

}

/** Memory */
class PhoneMemory extends Memory {

  setCapacity(capacity) {
    console.log(`[PHONE] ${capacity}`);
  }

}

class LaptopMemory extends Memory {

  setCapacity(capacity) {
    console.log(`[LAPTOP] ${capacity}`);
  }

}

class TabletMemory extends Memory {

  setCapacity(capacity) {
    console.log(`[TABLET] ${capacity}`);
  }

}

/** Display */
class PhoneDisplay extends Display {

  setResolution() {
    console.log(`[PHONE] 2340x1080`);
  }

}

class LaptopDisplay extends Display {

  setResolution() {
    console.log(`[LAPTOP] 2048x1536`);
  }

}

class TabletDisplay extends Display {

  setResolution() {
    console.log(`[TABLET] 2560x1600`);
  }

}

// Abstract Factory
class DeviceFactory {

  createCPU() {
    throw new Error('Method Not Implemented!');
  }

  createMemory() {
    throw new Error('Method Not Implemented!');
  }

  createDisplay() {
    throw new Error('Method Not Implemented!');
  }

}

// Concrete factories

/** Phone */
class PhoneDeviceFactory extends DeviceFactory {

  createCPU() {
    return new PhoneCPU();
  }

  createMemory() {
    return new PhoneMemory();
  }

  createDisplay() {
    return new PhoneDisplay();
  }

}

/** Laptop */
class LaptopDeviceFactory extends DeviceFactory {

  createCPU() {
    return new LaptopCPU();
  }

  createMemory() {
    return new LaptopMemory();
  }

  createDisplay() {
    return new LaptopDisplay();
  }

}

/** Tablet */
class TabletDeviceFactory extends DeviceFactory {

  createCPU() {
    return new TabletCPU();
  }

  createMemory() {
    return new TabletMemory();
  }

  createDisplay() {
    return new TabletDisplay();
  }

}

// Metodo extra para diferenciar familias de fabricas
function createFactory(type) {
  const factories = {
    phone: PhoneDeviceFactory,
    laptop: LaptopDeviceFactory,
    tablet: TabletDeviceFactory,
  };

  const Factory = factories[type];
  return new Factory();
}

// Main
function appAbstractFactory({ factory, isMobileFactory = true }) {
  console.log('\n--- [JS] Calling appAbstractFactory ---\n');

  if (!factory) {
    console.log('--- No factory provided ---');
    return;
  }

  const cpu     = factory.createCPU();
  const memory  = factory.createMemory();
  const display = factory.createDisplay();

  cpu.setSeries(isMobileFactory ? 'MB001' : 'LP001');
  memory.setCapacity(isMobileFactory ? 16 : 32);
  display.setResolution();
}

appAbstractFactory({
  factory: createFactory('phone'),
});
appAbstractFactory({
  factory: createFactory('tablet'),
});
appAbstractFactory({
  factory: createFactory('laptop'),
  isMobileFactory: false,
});