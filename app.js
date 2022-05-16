class Group {
  #arrStudents = [];
  allMarks = [];
  avgMarks = 0;

  addStudent({ fullName, marks }) {
    this.#arrStudents.push({ fullName, marks });
  }
  getAverageMark({ marks }) {
    this.allMarks.push(...marks);
    this.avgMarks =
      this.allMarks.reduce((a, b) => a + b, 0) / this.allMarks.length;
  }
}

class Student {
  constructor(fullName, marks) {
    this.fullName = fullName;
    this.marks = marks;
  }
}

const firstStudent = new Student("John Doe", [10, 102, 0]);
const secondStudent = new Student("Alex Smith", [10, 9, 8]);
const thirdStudent = new Student("Bob Johnson", [9, 10, 10, 8]);
const feGroup = new Group();
feGroup.addStudent(firstStudent);
feGroup.addStudent(secondStudent);
feGroup.addStudent(thirdStudent);
feGroup.getAverageMark(firstStudent);
feGroup.getAverageMark(secondStudent);
feGroup.getAverageMark(thirdStudent);
console.log(feGroup.avgMarks);
