interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[] = [];

let user1: IUser = {
  id: 1,
  name: "Shariar",
  age: 22,
};

let user2: IUser = {
  id: 2,
  name: "Islam",
  age: 25,
};

users.push(user1, user2);

const printUserInfo = (user: IUser) => {
  console.log(`User Id: ${user.id}, User Name: ${user.name}, Age: ${user.age}`);
};

users.forEach((user) => printUserInfo(user));
// console.log(users);
