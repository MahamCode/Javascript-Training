## Content:

##### Read these methods from this mdn docs

At
Concat

Entries

Every

Fill

Filter

Find

Findindex

Flat

Flatmap

Foreach

From

Includes

Indexof

Map

Push

Pop

Reverse

Shift

Reduce

## Source:

Array - JavaScript | MDN:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Problem:

Problems:

You are  given an array of objects representing the students in a class. Each object has the following properties:

const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 }
];
Your task is to write a set of functions to manipulate this array and perform the following operations:

Problem # 1:
Use the "concat" method to combine the "students" array with an additional array of objects representing new students who joined the class mid-semester. The new students are:

const newStudents = [
  { name: "Eve", grade: 88 },
  { name: "Frank", grade: 92 }
];  

Problem # 2:
Use the "entries" method to create an iterator over the "students" array and log each index and value to the console.

Problem # 3:  
Use the "every" method to check if all students have a passing grade (i.e. grade >= 70).

Problem # 4:  
Use the "fill" method to replace all student grades with a grade of 100.

Problem # 5:  
Use the "filter" method to create a new array containing only the students who have a grade above 90.

Problem # 6:  
Use the "find" method to find the first student with a name of "Charlie" and log their grade to the console.

Problem # 7:  
Use the "findIndex" method to find the index of the first student with a grade of 85.

Problem # 8: 
Use the "flat" method to flatten an array of arrays. The input array is:
const nestedArray = [[1, 2], [3, 4, 5], [6]];


Problem # 9: 
Use the "flatMap" method to map over the "students" array and create a new array of objects with a "passing" property that is true if the student has a grade >= 70 and false otherwise.

Problem # 10: 
Use the "forEach" method to log the name of each student to the console.

Problem # 11: 
Use the "from" method to create a new array from a string. The string is:
const string = "hello world";

Problem # 12:
Use the "includes" method to check if the "students" array includes a student with a name of "Eve".

Problem # 13:
Use the "indexOf" method to find the index of the first student with a name of "Bob".

Problem # 14:
Use the "map" method to create a new array containing only the grades of the students.

Problem # 15:
Use the "push" method to add a new student to the end of the "students" array. The new student is:
const newStudent = { name: "Grace", grade: 87 };

Problem # 16:
Use the "pop" method to remove the last student from the "students" array.

Problem # 17:
Use the "reverse" method to reverse the order of the "students" array.

Problem # 18:
Use the "shift" method to remove the first student from the "students" array.

Problem # 19:
Use the "reduce" method to calculate the average grade of all the students.