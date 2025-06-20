// Sample array of student objects
const students = [
    { name: "Alice", marks: [70, 65, 80] },
    { name: "Bob", marks: [90, 85, 95] },
    { name: "Charlie", marks: [50, 40, 60] },
    { name: "David", marks: [88, 76, 92] }
];

// 1. Use map() to calculate total marks for each student
const totalMarksArray = students.map(student => {
    const total = student.marks.reduce((sum, mark) => sum + mark, 0);
    return { name: student.name, totalMarks: total };
});

console.log("✅ Total Marks for Each Student:");
console.table(totalMarksArray);

// 2. Use filter() to find students who scored more than 200 marks
const above200 = totalMarksArray.filter(student => student.totalMarks > 200);

console.log("✅ Students with Total Marks > 200:");
console.table(above200);

// 3. Use reduce() to find the class topper (name + marks)
const topper = totalMarksArray.reduce((topperSoFar, student) => {
    return student.totalMarks > topperSoFar.totalMarks ? student : topperSoFar;
});

console.log("✅ Class Topper:");
console.log(JSON.stringify(topper, null, 2));
