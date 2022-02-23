(function () {

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter(users => users.languages.length >= 3)
    console.log(threeLanguages);


let emailAddress = users.map(user => user.email);
console.log(emailAddress);


let totalYears = users.reduce((previousValue, currentVal) => {
    return previousValue + currentVal.yearsOfExperience;
    }, 0)
    console.log(totalYears);
// Pt 2
    let avgExp = totalYears / users.length;

    let longestEmail = users.reduce((previousValue, currentValue)) => {
 return    previousValue.length > currentValue.length ? previousValue : currentValue;
    });
console.log(longestEmail);

let instruct

})();