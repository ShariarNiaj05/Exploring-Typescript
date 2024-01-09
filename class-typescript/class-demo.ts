class User {
  // properties, methods, constructor
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`User Name: ${this.userName}, Age: ${this.age}`);
  }
}

// class object
let user1 = new User('Shariar', 24).display()