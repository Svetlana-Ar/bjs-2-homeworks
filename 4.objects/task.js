function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const student1 = new Student("Алексей", "мужской", 20);
const student2 = new Student("Мария", "женский", 19);
const student3 = new Student("Борис", "мужской", 18);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
  if (this.marks === undefined) {
    console.log("Невозможно добавить оценки: студент ${this.name} отчислен.");
    return;
  }
  this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function() {
  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
