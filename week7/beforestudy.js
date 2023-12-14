function arrayfun(){
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];   
    }
    avg = sum/arr.length;
    return {min : min , max : max , sum : sum , avg : avg}
}

console.log(arrayfun([1 , 2 , 3 , 4 , 5]));
console.log(arrayfun([2 , 4 , 6 , 8 , 10]));