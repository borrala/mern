const insertionSort = (arr) => {

    // checking if the array has 0 or just 1 
    if (arr.length == 0 || arr.length == 1){
        console.log("Already sorted...")
        return arr
    }
    // set a nested for loop and check if the Index is less than last index
    for (let i = 0; i < arr.length; i++){
        // this loop is gonna be from the current index to back
        for (let g = i; g > 0;g--){
            // if is swap and continue loop back until not be true anymore
            if(arr[g] < arr[g-1] ){
                let tempIdx = arr[g]
                arr[g] = arr[g-1]
                arr[g-1] = tempIdx
            }
            else{
                break;
            }
        }
    }
    return arr
}

console.log(insertionSort([6,4,5,2,8,14,1,3]));
console.log(insertionSort([6]));