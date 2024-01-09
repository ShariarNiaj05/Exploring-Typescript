let users: object[];
users = [];

let user1: { userName: string, userId: number };

user1 = { userName: "Shariar", userId: 101 };

// console.log(users);

users.push(user1);
// console.log(users);

for (const key in users) {
    console.log(users[key]);
    
    
}