let userInfo1: () => void;

let userInfo2: (name: string) => void;

let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
  console.log("hello is 32 years old");
};

userInfo2 = (name: string) => {
  console.log(`${name} is 32 years old`);
};

userInfo3 = (name: string, age: number) => {
  return `${name} is ${age} years old`;
};

userInfo1();
userInfo2("Jhon");
const threeInfr = userInfo3("Jhon", 25);
console.log(threeInfr);
