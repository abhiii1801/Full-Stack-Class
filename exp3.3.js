// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`👤 Name: ${this.name}, Age: ${this.age}`);
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // call parent constructor
    this.course = course;
  }

  // Override method
  displayInfo() {
    console.log(
      `🎓 Student -> Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`
    );
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Override method
  displayInfo() {
    console.log(
      `📘 Teacher -> Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`
    );
  }
}

// -----------------------------
// Create instances & test
// -----------------------------

const student1 = new Student("Abhiii", 21, "Computer Science");
const teacher1 = new Teacher("Dr. Sharma", 45, "Data Structures");

// Call methods
student1.displayInfo(); // 🎓 Student -> Name: Abhiii, Age: 21, Course: Computer Science
teacher1.displayInfo(); // 📘 Teacher -> Name: Dr. Sharma, Age: 45, Subject: Data Structures

// We can still use Person directly too
const person1 = new Person("Generic Human", 99);
person1.displayInfo(); // 👤 Name: Generic Human, Age: 99
