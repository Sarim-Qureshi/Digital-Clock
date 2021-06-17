setInterval(() => {
    var date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    if(second<10){
        second = '0'+second;
    }
    clock.innerHTML = `${hour}:${minute}:${second}`;
}, 500);