/* let users: object[];
users = []; */
var user; // let user1: typeof user;
var users;
users = [];
// let user1: typeof user;
// or
var user1;
user1 = { userName: "Shariar", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "Islam", userId: 102 };
users.push(user2);
var user3;
user3 = { userName: "Niaj", userId: 103 };
users.push(user3);
var getRequest;
var postRequest;
getRequest = "GET";
postRequest = "POST";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
