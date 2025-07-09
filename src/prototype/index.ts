type AnimalType = "dog" | "cat";

class Animal {
  type: AnimalType;
  name: string;

  constructor(type: AnimalType, name: string) {
    this.type = type;
    this.name = name;
  }
  bark() {
    return `Woof!`;
  }
}

const dog = new Animal("dog", "Buddy");
const cat = new Animal("cat", "Whiskers");

// @ts-ignore-next-line
console.log(dog.__proto__ === Animal.prototype); // true
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true

class SuperAnimal extends Animal {
  constructor(type: AnimalType, name: string) {
    super(type, name);
  }
  fly() {
    return "fly!!";
  }
}

const superDog = new SuperAnimal("dog", "Super Buddy");
// プロトタイプチェーンを辿ってAnimalのメソッドも利用できる
console.log(superDog.bark()); // Woof!
console.log(superDog.fly()); // fly!!
