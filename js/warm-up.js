/*
write a function that takes a string as argument and returns the number of vowels contained in that string.
    The vowels are “a”, “e”, “i”, “o”, “u”.
input: "helicopter"
output: 4
reason: there are 4 vowels in the input word helicopter
*/

const str = 'this is a string';
const countVowels = (str = '') => {
    str = str.toLowerCase();
    const legend = 'aeiou';
    let count = 0;
    for(let i = 0; i < str.length; i++){
        const el = str[i];
        if(!legend.includes(el)){
            continue;
        };
        count++;
    };
    return count;
};
console.log(countVowels(str));
