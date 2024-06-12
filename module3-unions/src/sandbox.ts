type Cat = {
  name: string;
  whiskers: number;
  felineBreed: string;

  TYPE: "CAT"; // adding a type property to each, gives us a "discriminated union"
};

type Dog = {
  name: string;
  obedient: boolean;
  canineBreed: string;

  TYPE: "DOG";
};


function dealWithAnimal(animal: Cat | Dog) {
  // this property allows typescript to know that we're dealing with a cat.
  // but this is brittle. if there are more type options or not one unique property.
  if ("whiskers" in animal) {
    animal.felineBreed
  } else {
    animal.obedient
  }
}

function dealWithAnimal1(animal: Cat | Dog) {
  if (animal.TYPE === "CAT") {
    animal.felineBreed
  }
}

let sOrN: string | number = Math.random() < 0.5 ? "" : 1;

if (typeof sOrN === "string") { //javascipt typeof. different from TS typeof
  
}

class Person {
  name?: string;
}

class Pet {
  age?: number;
}

let x = Math.random() < 0.5 ? new Person(): new Pet();

// can use instance of

export default null;
