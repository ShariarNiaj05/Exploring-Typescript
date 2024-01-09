var users;
users = [];
var user1;
user1 = { userName: "Shariar", userId: 101 };
// console.log(users);
users.push(user1);
// console.log(users);
for (var key in users) {
    console.log(users[key]);
}
