//Solution # 1
function multiply(num1, num2) {
    return num1 * num2
}
console.log(multiply(2, 3))

//Solution # 2
function greeting(name) {
    return `Hello, ${name}!`
}
console.log(greeting("Maham"))

//Solution # 3
const sum = (arr_numbers) => {
    var count = 0
    arr_numbers.map((num) => {
        count += num
    })
    return count
}
console.log(sum([1, 2, 3]))

//Solution # 4
function calculateBMI(weight, height) {
    return weight / (height * height)
}
console.log(`BMI: ${calculateBMI(47, 4.5)}`)

//Solution # 5
const calcLength = (input) => input.length
console.log(calcLength("MAHAM HAFEEZ"))

//Solution # 6
function reverseString(stringInput) {
    return stringInput.split('').reverse().join('')
}
console.log(reverseString("sheeza"))

//Solution # 7
const person = (objectInput) => {
    return `Hello, ${objectInput.first} ${objectInput.last}!`
}
console.log(person({
    first: "Maham",
    last: "Hafeez"
}))

//Solution # 8
function capitalize(input) {
    let first_char = input.charAt(0).toUpperCase()
    return first_char + input.slice(1)
}
console.log(capitalize("maham"))

//Solution # 9
const arrCap = (strArrInput) => {
    return strArrInput.map((input) =>
        input.toUpperCase()
    )
}
console.log(arrCap(["maham", "sheeza", "ansa"]))


//Solution # 10
function isPalindrome(name) {
    if (name === name.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome("maham"))

