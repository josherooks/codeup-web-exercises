"use strict"

console.log('Promise')

function userLastCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;

    console.log(url);

    return fetch(url, {headers: {'Authorization': GITHUB_TOKEN}})
        .then((response) => response.json())
        .then((listOfEvents)=>{
            console.log(listOfEvents);
            for(let event of listOfEvents) {
                if(event.type ==='PushEvent'){
                    return event.created_at;
                }
            }
        })
}


console.log(userLastCommit('josherooks'))

const wait = (number) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },number)
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
