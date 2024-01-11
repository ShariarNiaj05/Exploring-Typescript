function printUserInfo(userId, userAge) {
    console.log("user id: ".concat(userId, ", user age: ").concat(userAge));
}
var printUserInfo2 = function (userId, userAge) {
    console.log("user id: ".concat(userId, ", user age: ").concat(userAge));
};
printUserInfo("101", 15);
printUserInfo(10, 15);
printUserInfo(true, true);
printUserInfo({ id: 101 }, { age: 15 });
