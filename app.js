class Group {
  #arrStudents = [];
  allMarks = [];
  avgMarks = 0;

  addStudent({ fullName, marks }) {
    this.#arrStudents.push({ fullName, marks });
  }
  getAverageMark() {
    let arr = [];

    this.#arrStudents.map((student) => arr.push(...student.marks));

    this.avgMarks = arr.reduce((acc, marks) => (acc += marks / arr.length), 0);
  }
}

class Student {
  constructor(fullName, marks) {
    this.fullName = fullName;
    this.marks = marks;
  }
}

const feGroup = new Group();
feGroup.addStudent(new Student("John Doe", [10, 102, 0]));
feGroup.addStudent(new Student("Alex Smith", [10, 9, 8]));
feGroup.addStudent(new Student("Bob Johnson", [9, 10, 10, 8]));
feGroup.getAverageMark();
// console.log(feGroup.avgMarks);
