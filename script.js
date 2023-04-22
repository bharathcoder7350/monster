        // Time
        let a;
        let time;
setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes();
    document.getElementById('time').innerHTML = time ;
}, 1000);