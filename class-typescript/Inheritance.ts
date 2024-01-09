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

// inheritance

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `User Name: ${this.userName}, Age: ${this.age}, ID: ${this.studentId}`
    );
  }
}

let student1 = new Student("Niaj", 24, 101).display();

// class object
//   let user1 = new User('Shariar', 24).display()
