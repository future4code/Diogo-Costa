const str = "aaaabbbbccccbbbbb";
const checkIfAnagram = (inputA, inputB) => {
    if (inputA.length !== inputB.length) {
        return false;
    }
    let hashTableA = {};
    let hashTableB = {};
    for (let char of inputA) {
        if (hashTableA[char]) {
            hashTableA[char] += 1;
        }
        else {
            hashTableA[char] = 1;
        }
    }
    for (let char of inputB) {
        if (hashTableB[char]) {
            hashTableB[char] += 1;
        }
        else {
            hashTableB[char] = 1;
        }
    }
    console.log(hashTableA);
    console.log(hashTableB);
    for (let key in hashTableA) {
        if (hashTableA[key] !== hashTableB[key]) {
            return false;
        }
    }
    return true;
};
console.log(checkIfAnagram("banana", "ananab")); // true
console.log(checkIfAnagram("roma", "amor")); // true
console.log(checkIfAnagram("roma", "amora")); // false
