
// problem 1
function hourToMinute(hour) {
    const converToMInute = hour * 60;
    return converToMInute;
}
const hours = 1.5;
const convertHourToMinute = hourToMinute(hours);
console.log(convertHourToMinute);



// problem 2
function findLeapYear(year) {
    let result = [];
    for (let i = 0; i < year.length; i++) {
        const index = year[i];
        const element = index;
        // console.log(i, element);
        if (element % 4 === 0) {
            result.push(element);
        }
    }
    return result;
}
const leapYears = [2023, 2024, 2025, 2028, 2030];
console.log(findLeapYear(leapYears));




// problem 3
function findOddSum(number) {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        const index = number[i];
        const element = index;
        if (element % 2 !== 0) {
            result = result + element;

        }
    }
    return result;

}

const array = [5, 7, 8, 10, 45, 30];
console.log(findOddSum(array));