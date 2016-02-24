var break_time = 5;
var work_time = 25;
var stop = 0;
var time = 0;
var running = 0;
document.getElementById("giantclock").innerHTML = work_time + ":00";
set_break();
set_work();

function increase_break() {
    break_time++;
    set_break();

}
function decrease_break() {
    if (break_time > 1) {
        break_time--;
        set_break();
    }
}
function set_break() {
    document.getElementById("break_time").value = break_time;
}
function increase_work() {
    work_time++;
    set_work();

}
function decrease_work() {
    if (work_time > 1) {
        work_time--;
        set_work();
    }
}
function set_work() {
    document.getElementById("work_time").value = work_time;
}
function start_time() {
    if (running == 0) {
        running = 1;
        increment_work();
        document.getElementById("start").innerHTML = "Pause";
    } else {
        running = 0;
        document.getElementById("start").innerHTML = "Resume";
    }
}
function stop_time(){
    running = 0;
    time = 0;
    makezero();
    document.getElementById("start").innerHTML = "Start"
}
function increment_work() {
    setTimeout(function(){
        if (running == 1) {
            time++;
            var secs = Math.floor(time);
            var mins = Math.floor(secs / 60);
            time_left = work_time * 60;
            time_left2 = time_left - time;
            time_left_sec = time_left2 % 60;
            time_left_min = Math.floor(time_left2 / 60);
            
            if (time_left_min==0 && time_left_sec == 0) {
                time = 0;
                var wav = 'http://oringz.com/ringtone/important-stuff/01_important-stuff-song/?download';
                var audio = new Audio(wav);
                audio.play();
                increment_break();
            } else if (time_left_sec < 10) {
                document.getElementById("giantclock").innerHTML = time_left_min + ":0" + time_left_sec;
                increment_work();
            } else {
                document.getElementById("giantclock").innerHTML = time_left_min + ":" + time_left_sec;
                increment_work();
            }
            
        }     
    }, 1000);
}
function increment_break() {
    setTimeout(function(){
        if (running == 1) {
            time++;
            var secs = Math.floor(time);
            var mins = Math.floor(secs / 60);
            time_left = break_time * 60;
            time_left2 = time_left - time;
            time_left_sec = time_left2 % 60;
            time_left_min = Math.floor(time_left2 / 60);
            
            if (time_left_min==0 && time_left_sec == 0) {
                time = 0;
                var wav = 'http://oringz.com/ringtone/important-stuff/01_important-stuff-song/?download';
                var audio = new Audio(wav);
                audio.play();
                increment_work();
            } else if (time_left_sec < 10) {
                document.getElementById("giantclock").innerHTML = time_left_min + ":0" + time_left_sec;
                increment_break();
            } else {
                document.getElementById("giantclock").innerHTML = time_left_min + ":" + time_left_sec;
                increment_break();
            }
            
        }     
    }, 1000);
}
function makezero() {
    document.getElementById("giantclock").innerHTML = "00" + ":" + "00";
}




/*
var trip = 0;
var alarm = 0;

function start_time() {
    new_start_time();
    var now = new Date();
    var timediff = alarm.getTime() - now.getTime();
    
    var seconds = Math.floor(timediff/1000);
    var minutes = Math.floor(seconds/60);
    
    seconds %= 60;
    minutes %= 60;
    
    document.getElementById("giantclock").innerHTML = minutes + ":" +  seconds;
    
    if (stop == 0) {
        var timer = setTimeout("start_time()", 1000);
    } else {
        clearTimeout(timer);
    }
}

function new_start_time() {
    if (trip == 0 ) {
        alarm = addtime();
        trip++;
    }
}
function stop_time() {
    stop = 1;
}

function addtime() {
    var date = new Date();
    return new Date(date.getTime() + work_time * 60000);
}*/
/*var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("giantclock").innerHTML = d.getHours() + ":" +  d.getMinutes()+ ":"
+ d.getSeconds();
}*/

/*var secs = 10;
var elem="giantclock";
function countdown(secs, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = secs.toLocaleTimeString();
    
    secs--;
    var timer = setTimeout('countdown('+secs+', "'+elem+'")', 1000);
}
countdown(secs, elem);*/
