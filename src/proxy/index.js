const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`そのプロパティは存在しません: ${prop}`);
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`年齢には数値を指定してください。`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`名前を確認して下さい`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;
    }
    return true;
  },
});

personProxy.nonExistentProperty;
personProxy.age = "44";
personProxy.name = "";
// Hmm.. this property doesn't seem to exist
// Sorry, you can only pass numeric values for age.
// You need to provide a valid name.
