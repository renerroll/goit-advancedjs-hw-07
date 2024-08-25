class Key {
    constructor(private signature: number = Math.random()) {
    }
  
    getSignature() {
      return this.signature;
    }
  }
  
  class Person {
      constructor(private key: Key) {
          this.key = key;
       }
  
      getKey() {
          return this.key;
      }  
  }
  
  abstract class House {
      protected door: boolean = false;
      protected key: Key;
      protected tenants: Person[] = [];    
  
      constructor(key: Key) {
          this.key = key;
      }
         
      comeIn(person: Person) : void {
          if (this.door) {
              this.tenants.push(person);
              console.log('Door is opened');
          } else {
              console.log('Door is closed');
          }
      }
  
      abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
  
      constructor(key: Key) {
          super(key);
      }
      openDoor(key: Key):void {
          if (key.getSignature() === this.key.getSignature()) {
              this.door = true;
          }
      }
  }
  
  
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  
  
  export {};

  //ignore cases when key is not correct