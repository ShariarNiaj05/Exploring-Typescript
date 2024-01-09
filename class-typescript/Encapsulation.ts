// Encapsulation: public, private, protected, readonly

class User {
  // properties, methods, constructor
  public userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`User Name: ${this.userName}, Age: ${this.age}`);
  }
}

// cannot used object in abstract class

// inheritance
class Student extends User {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `User Name: ${this.userName}, Age: ${this.age}, ID: ${this.studentId}`
    );
    }
    
    setStudentId(studentId: number):void {
        this.studentId = studentId
    }

    getStudentId(): number{
        return this.studentId;
    }
}

let student1 = new Student("Niaj", 24, 101)
student1.setStudentId(101)
console.log(student1);
console.log(student1.getStudentId());

let user1 = new User("Shariar", 23);
user1.userName = "Islam";
// user1.display()
