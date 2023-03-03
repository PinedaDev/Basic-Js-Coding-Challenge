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

//Test

/**
 * [1,2,3,5]
 * [2,3,5,6]
 * [7,9,10,11] 
*/

console.log(findTheNumber([1, 2, 4, 5, 6]))
