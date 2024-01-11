function printUserInfo<X, Y>(userId: X, userAge: Y) {
  console.log(`user id: ${userId}, user age: ${userAge}`);
}

const printUserInfo2 = <X, Y>(userId: X, userAge: Y) => {
  console.log(`user id: ${userId}, user age: ${userAge}`);
};

printUserInfo("101", 15);
printUserInfo(10, 15);
printUserInfo(true, true);
printUserInfo({ id: 101 }, { age: 15 });
