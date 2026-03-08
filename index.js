// Student Data
const students = [
  { name: "Aman", marks: 85, subject: "Math" },
  { name: "Riya", marks: 42, subject: "Science" },
  { name: "Karan", marks: 73, subject: "Math" },
  { name: "Sneha", marks: 91, subject: "English" },
  { name: "Rahul", marks: 38, subject: "Science" },
  { name: "Priya", marks: 67, subject: "English" },
  { name: "Arjun", marks: 54, subject: "Math" },
  { name: "Neha", marks: 29, subject: "English" },
  { name: "Vikram", marks: 76, subject: "Science" },
  { name: "Anjali", marks: 88, subject: "Math" }
];

const PASS_MARKS = 40;

// Passed Students
const passedStudents = students.filter(student => student.marks >= PASS_MARKS);

// Failed Students
const failedStudents = students.filter(student => student.marks < PASS_MARKS);

// Average Marks
const averageMarks =
  students.reduce((sum, student) => sum + student.marks, 0) / students.length;

// Topper
const topper = students.reduce((top, student) =>
  student.marks > top.marks ? student : top
);

// Group By Subject
const groupedBySubject = students.reduce((groups, student) => {
  if (!groups[student.subject]) {
    groups[student.subject] = [];
  }
  groups[student.subject].push(student);
  return groups;
}, {});

// Output
console.log("Passed Students:", passedStudents);
console.log("Failed Students:", failedStudents);
console.log("Average Marks:", averageMarks);
console.log("Topper:", topper);
console.log("Grouped By Subject:", groupedBySubject);
