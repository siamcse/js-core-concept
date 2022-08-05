function findOddSum(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2 !== 0){
            sum+= numbers[i];
        }

    }
    return sum;
}
let numbers=[5, 7, 8, 10, 45, 30];
console.log(findOddSum(numbers));