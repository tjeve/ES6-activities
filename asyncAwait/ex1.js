// The function below uses plain old Promises. Rewrite it as an "async" method!

let getDogsOwnersBestFriend = () => {
    return get('/dog/1').then(dog => {
        return get(`/owner/${dog.owner}`);
    }).then( owner => {
        return get(`/friend/${owner.bestFriend}`);
    }).then( friend => {
        return friend.name;
    })
}