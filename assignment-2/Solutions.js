    //Solution # 1
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 }
];
const newStudents = [
    { name: "Eve", grade: 88 },
    { name: "Frank", grade: 92 }
];  
const updatedStudents = students.concat(newStudents)
console.log(updatedStudents)

    //Solution # 2
const studentEntries = students.entries();
for (const [key, val] of studentEntries) {
    console.log(`key: ${key}, name: ${val.name}, grade: ${val.grade}`);
}

    //Solution # 3
console.log(students.every((student)=>student.grade >=70))

    //Solution # 4
console.log(students.map(({ grade }) => grade).fill(100));

    //Solution # 5
const studentsForFilter = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 }
];
console.log(studentsForFilter.filter((student)=>student.grade > 90))

    //Solution # 6
const studentsForFind = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 }
];
const result = studentsForFind.find((student) => student.name === "Charlie");
console.log(`Student grade with a name of "Charlie": ${result.grade}`)

    //Solution # 7
console.log(studentsForFilter.findIndex((student)=>student.grade === 85))

    //Solution # 8
const nestedArray = [[1, 2], [3, 4, 5], [6]];
console.log(nestedArray.flat());

    //Solution # 9
const studentsList = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 50 }
];
console.log(studentsList.flatMap((student) => student.grade >= 70));

    //Solution # 10
studentsList.forEach(student=> console.log(student.name));

    //Solution # 11
const string = "hello world";
console.log(Array.from(string));

    //Solution # 12
console.log(studentsList.map(students=>students.name).includes('Eve'));

    //Solution # 13
console.log(studentsList.map(students=>students.name).indexOf("Bob"))

    //Solution # 14
console.log(studentsList.map((student) => student.grade))

    //Solution # 15
studentsList.push({ name: "Grace", grade: 87 })
console.log(studentsList)

    //Solution # 16
studentsList.pop();
console.log(studentsList)

    //Solution # 17
studentsList.reverse();
console.log(studentsList)

    //Solution # 18
studentsList.shift();
console.log(studentsList)

    //Solution # 19
console.log(studentsList.reduce((accumulator, currentValue) => {
  let { grade } = currentValue;
  return accumulator + grade / studentsList.length;
}, 0));