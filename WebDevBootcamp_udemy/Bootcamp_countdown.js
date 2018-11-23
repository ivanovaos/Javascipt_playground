function countdown(time_sec){
    var current_time = time_sec;
    var counter = setInterval(function () {
        if (current_time > 0) {
            current_time -= 1;
            console.log(current_time);
        } else { 
            console.log("Ring Ring Ring!!!");
            clearInterval(counter);
        }
    }, 1000); 
    
}

countdown(3);