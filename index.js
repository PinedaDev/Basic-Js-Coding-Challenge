//Test Arrays

/**
 * [1,2,3,5]
 * [2,3,5,6]
 * [7,9,10,11] 
 * 
 * [100,9,34,11] 
*/

// Challenge: Find the missing number

/**
 * First and last indexes are never going to miss
 * Store the previous number after each secuence
 */

function findTheNumber(numbers) {
    let missingNumber;
    let prevNumber;

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

console.log(findTheNumber([1, 2, 4, 5, 6]))

// Challenge: Find the minimum and maximum numbers in an array:

/**
 * Order the array in asscending order
 * min value is going to match with the first sorted array index
 * and the same will happend to the max value with the last element inside 
 * the sorted array
 */

function minMax(numbers) {
    let minValue;
    let maxValue;


    const sortedList = numbers.sort((a, b) => a - b);
    lastIndex = sortedList.length - 1;

    return { minValue: sortedList[0], maxValue: sortedList[lastIndex] }

}

console.log(minMax([100, 9, 34, 11]))
