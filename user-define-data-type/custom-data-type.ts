/* let users: object[];
users = []; */

let user: { userName: string; userId: number }; // let user1: typeof user;
// or
type User = { userName: string; userId: number }; //let user1: User;
let users: User[];
users = [];

// let user1: typeof user;
// or
let user1: User;
user1 = { userName: "Shariar", userId: 101 };
users.push(user1);

let user2: User;
user2 = { userName: "Islam", userId: 102 };
users.push(user2);

let user3: User;
user3 = { userName: "Niaj", userId: 103 };
users.push(user3);

// console.log(users);

type RequestType = "GET" | "POST";
let getRequest: RequestType;
let postRequest: RequestType;
getRequest = "GET";
postRequest = "POST";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}


requestHandler("POST")