const numbers = [1,2,3,4,5,6];
const doubles = numbers.map((num) =>{
    return num * 2
});

const isEven = numbers.filter((num) => {
    return num % 2 == 0
});

export {doubles, isEven}