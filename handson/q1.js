//var sleep = require('');
function callback() {
    console.log("Inside the callback function now!!!!");
}

function settimeoutsync(callback,n) {
    var start = Date.now();

    while(Date.now()- start < n ){

    };
    callback();
}

settimeoutsync(callback,2000);