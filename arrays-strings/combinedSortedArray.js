function combinedSortedArray(arr1, arr2) {
    const combinedArr = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        const arr1Val = arr1[i];
        const arr2Val = arr2[j];
        if (arr1Val < arr2Val) {
            combinedArr.push(arr1Val);
            i++;
        } else {
            combinedArr.push(arr2Val);
            j++;
        }
    } 
    while (i < arr1.length) {
        combinedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        combinedArr.push(arr2[j]);
        j++;
    }
    return combinedArr;
}

console.log(combinedSortedArray([1,4,7,20], [3,5,6]));

console.log(combinedSortedArray([3,5,6], [1,4,7,20]));

console.log(combinedSortedArray([0, 222.123, 999912391239], [-12]));
console.log(combinedSortedArray([-123, 5, 12], []));
console.log(combinedSortedArray([], [-123]));
console.log(combinedSortedArray([], []));