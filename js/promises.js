

/*Lecture*/

// a js object, used as a placeholder, used often with requests//

/*
function add(a, b) {
    return a + b;
}

add(4,6); // triggers immediately once its called

$.ajax("\"https://api.github.com/zen\"")
    .done(function (res) {
        console.log(res);

        })
*/

// similar to a conditional, in that a function will not run unless X
// condition(typically timely condition) is ready

//PROMISE STATE:
//PENDING- waiting for the response/ waiting for the condition to be met
//RESOLVED- when condition waiting for is successfully met - your resolved function will execute
//REJECTED- when event happens, but the condition is not met successfully, fails -- triggers the function that is going to handle the failed error

/*fetch(url, {headers: {'Authorization': "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" }})
let

function Promise(username,) {

}*/


//GET request from API
//fetch()
// fetch("http://api.github.com/zen")
// make the request

//how to handle the response?  JSON
//consolelog(res)


//.then()
//handle the response
//accept two parameters
//1 - callback funciton -> get executed only when the request comes back successfully --> state of the promise =resolved
//1 -> always going to accept

/*

fetch("https://www.boredapi.com/activity")
.then(function (res) {
    console.log(res);
})

fetch("https://www.boredapi.com/activity")
.then(res => {
    console.log(res);
    console.log(res.body);
});*/




// CUSTOM PROMISE
//1
/*
function makeRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, 1500);
    });
}

const request = makeRequest();
console.log(request); // pending promise
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"*/


//2



/*
let myCustomPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let randomNum = Math.random()
        if (randomNum > 0.5) {
            console.log('random number: ', randomNum);
            console.log('This is a success')
            resolve(); //triggers the resolve function
        } else {
            reject(); // execute the rejection function
            console.log('random number: ', randomNum);
            console.log('This is a failure');
        }
    }, 3000);
})
*/

let APIKEY = GIT_TOKEN;
let url = 'https://api.github.com/users/tater/events'

"use strict";

function getGithubUsernames(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GIT_TOKEN}})
        .then(response => response.json())
        .then(responseObj => console.log(responseObj[0].created_at))
}




getGithubUsernames('Therman116220')





let wait = num => new Promise( (resolve, reject) => {
    if(num === 0) {
        reject();
    } else {
        setTimeout(function () {
            resolve();
        }, num)
    }
})
//implementation of NUM
wait(1000).then( () => console.log('Loading...'));
wait(1500).then( () => console.log('[.         ]'));
wait(2000).then( () => console.log('[..        ]'));
wait(2500).then( () => console.log('[...       ]'));
wait(3000).then( () => console.log('[....      ]'));
wait(3500).then( () => console.log('[.....     ]'));
wait(4000).then( () => console.log('[......    ]'));
wait(4500).then( () => console.log('[.......   ]'));
wait(5000).then( () => console.log('[........  ]'));
wait(5500).then( () => console.log('[......... ]'));
wait(6000).then( () => console.log('[..........]'));
wait(6200).then( () => console.log('[Loading Complete]'));
wait(6500).then( () => console.log('You\'ll see this after 1 second'));


wait(5000).then( () => console.log('You\'ll see this after 5 seconds'));






