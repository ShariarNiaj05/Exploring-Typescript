abstract class User {
  // properties, methods, constructor
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  abstract display(): void;
}

// cannot used object of abstract class 



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

