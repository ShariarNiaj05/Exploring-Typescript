var users = [];
var user1 = {
    id: 1,
    name: "Shariar",
    age: 22,
};
var user2 = {
    id: 2,
    name: "Islam",
    age: 25,
};
users.push(user1, user2);
var printUserInfo = function (user) {
    console.log("User Id: ".concat(user.id, ", User Name: ").concat(user.name, ", Age: ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
// console.log(users);
