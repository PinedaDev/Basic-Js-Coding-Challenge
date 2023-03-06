// Challenge: Find the missing number

/**
 * First and last indexes are never going to miss
 * Store the previous number after each secuence
 * to compare if the current and previous number are consecuttives,
 * if not the the number behind the current number  is the missing one
 */

function findTheNumber(numbers) {
    let prevNumber;
    let missingNumber;

    numbers.sort((a, b) => a - b)

    numbers.forEach((current_number, index) => {
        if (index === 0) {
            prevNumber = current_number
            return
        }

        if (current_number > prevNumber + 1) {
            missingNumber = current_number - 1;
        }

        prevNumber = current_number
    });
    return missingNumber;
}

console.log(findTheNumber([1, 5, 3, 2]))

// Challenge: Find the minimum and maximum numbers in an array:

/**
 * Order the array in asscending order
 * min value is going to match with the first sorted array index
 * and the same will happend to the max value with the last element inside 
 * the sorted array
 */

function minMax(numbers) {
    const sortedList = numbers.sort((a, b) => a - b);
    lastIndex = sortedList.length - 1;
    return { minValue: sortedList[0], maxValue: sortedList[lastIndex] }
}

console.log(minMax([100, 9, 34, 11]))

// Challenge: Find the first non-repeated character in a string

//solution 1: for a string of consecutive characters
/**
 * Itinerate throug the array and compare if 
 * the current interaction value is not equal to 
 * the previous and next indexes relative to its 
 * position
 */

function findTheUnique(myString) {
    arrayOfStrings = [...myString]
    console.log(arrayOfStrings)
    let uniqueChr;

    arrayOfStrings.forEach((char, index) => {
        if (char !== arrayOfStrings[index - 1] && char !== arrayOfStrings[index + 1]) {
            uniqueChr = char
        }
    })
    return uniqueChr
}

//solution 2 for any given string of characters
/**
 * Itinerate throug the array and check if 
 * the current interaction index is equal to the index of the last 
 * occurrence of the specified current interaction inside the whole string 
 * if they are equal it means that the current interaction is the only one
 * inside the string 
 */

function nonRepeted(str) {
    let uniqueChr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            uniqueChr = str[i];
            break
        }
    }
    return uniqueChr
}

// class

class Person {
    constructor(name, age, interest) {
        this.name = name;
        this.age = age;
        this.interest = interest
    }

    greetings() {
        return `Hi my name is ${this.name}`
    }

    bio() {
        let IamInto = ""

        this.interest.forEach((item) => {

            if (item === this.interest[this.interest.length - 1]) {
                IamInto += ` and ${item}`
                return
            }

            if (item !== this.interest[0] && item !== this.interest[this.interest.length - 1]) {
                IamInto += `, ${item}`
                return
            }

            IamInto += `${item}`
        })

        return `Hi my name is ${this.name}, I'm ${this.age} years old, and my interest are: ${IamInto}`
    }
}

const alex = new Person("Alex", 21, ["football", "video games", "painting", "photography"])

console.log(alex.greetings())
