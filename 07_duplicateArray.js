let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
let constArr = [];

for (let i = 0; i < array.length; i++) {
    if (constArr.indexOf(array[i]) === -1) {
        constArr.push(array[i]);
    }
}

console.log("Duplicate elements",constArr);
