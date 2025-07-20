class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const dogMixin = {
  bark: () => console.log("Woof!"),
};

Object.assign(Dog.prototype, dogMixin);

const dog = new Dog("tarou");
// @ts-expect-error
dog.bark();
