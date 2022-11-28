//buttons
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");
const btnResume = document.getElementById("btn-resume");

//Timers
let workTimer = document.getElementById("workTime")
let breakTimer = document.getElementById("breakTime")

//Time variables
let workTime = 25
let breakTime = 5
let seconds = "00"
var interval;


//display
window.onload = () => {
 document.getElementById("minutes").innerHTML = workTime;
 document.getElementById("seconds").innerHTML = seconds;
 workTimer.classList.add('active');
}

function start(){

    document.getElementById('btn-start').style.display = "none";
    document.getElementById('btn-pause').style.display = "block";
    document.getElementById('btn-reset').style.display = "block";
    seconds = 59
    workMinutes = workTime - 1;
    breakMinutes = breakTime  - 1;
    breakCount = 0;

    interval = setInterval(function() {
        document.getElementById("minutes").innerHTML = workMinutes;
        document.getElementById("seconds").innerHTML = seconds;
        seconds--;

        if(seconds < 10){
            document.getElementById("seconds").innerHTML = '0' + seconds;
          };

          if(workMinutes < 10){
            document.getElementById("minutes").innerHTML = '0' + workMinutes;
          };
             
            if(seconds === 0){
              workMinutes = workMinutes - 1;
              if(workMinutes === -1){
                if(breakCount % 2 === 0){
                  workMinutes = breakMinutes;
                  breakCount ++;
                  workTimer.classList.remove('active');
                  breakTimer.classList.add('active');
                  if(breakTimer.classList.contains('active')){
                    document.getElementById('btn-reset').disabled = true;
                  }
                } else {
                 workMinutes = workTime;
                  breakCount ++;
                  workTimer.classList.add('active');
                  breakTimer.classList.remove('active');
                  if(workTimer.classList.contains('active')){
                    document.getElementById('btn-reset').disabled = false;
                  }
                }
              }
              seconds = 59;
            }
        if(!seconds){
             clearInterval(interval);
        }
   },1000)
}

function pause(){
    document.getElementById('btn-resume').style.display = "block"
    document.getElementById('btn-start').style.display = "none";
    document.getElementById('btn-pause').style.display = "none";
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
    document.getElementById('btn-start').style.display = "block";
    document.getElementById('btn-resume').style.display = "none"
    document.getElementById('btn-pause').style.display = "none";

    if(breakTimer.classList.contains('active')){
        document.getElementById('btn-resume').style.display = "block"
        document.getElementById('btn-start').style.display = "none";
        breakTime = 5
        seconds = "00"
        document.getElementById("minutes").innerHTML = breakTime;
        document.getElementById("seconds").innerHTML = seconds;
    } else{
    workTime = 25
    seconds = "00"
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;
    }
}

function resume(){
    document.getElementById('btn-resume').style.display = "none";
    document.getElementById('btn-pause').style.display = "block";

      document.getElementById("minutes").innerHTML = workMinutes;
      document.getElementById("seconds").innerHTML = seconds;

    seconds--;

    interval = setInterval(function() {
        document.getElementById("minutes").innerHTML = workMinutes;
        document.getElementById("seconds").innerHTML = seconds;
        seconds--;

    if(seconds < 10){
        document.getElementById("seconds").innerHTML = '0' + seconds;
      };
      if(workMinutes < 10){
        document.getElementById("minutes").innerHTML = '0' + workMinutes;
      };

      if(seconds === 0){
        workMinutes = workMinutes - 1;
        if(workMinutes === -1){
          if(breakCount % 2 === 0){
            workMinutes = breakMinutes;
            breakCount ++;
            workTimer.classList.remove('active');
            breakTimer.classList.add('active');
            if(breakTimer.classList.contains('active')){
              document.getElementById('btn-reset').disabled = true;
            }
          } else {
           workMinutes = workTime;
            breakCount ++;
            workTimer.classList.add('active');
            breakTimer.classList.remove('active');
            if(workTimer.classList.contains('active')){
              document.getElementById('btn-reset').disabled = false;
            }
          }
        }
        seconds = 59;
      }
    },1000)
}

function incrementWorkTime(){
  workTime += 5
  document.getElementById("minutes").innerHTML = workTime;
}

function decrementWorkTime(){
  if(workTime > 5){
  workTime -= 5
  document.getElementById("minutes").innerHTML = workTime;
  } else {
    workTime -= 0
    document.getElementById("minutes").innerHTML = workTime;
  }
}

function incrementBreakTime(){
  breakTime += 5
  if(breakTimer.classList.contains('active')){
  document.getElementById("minutes").innerHTML = breakTime;
  }
}

function decrementBreakTime(){
  if(breakTime > 5){
  breakTime -= 5
  document.getElementById("minutes").innerHTML = breakTime;
}  
  if(breakTimer.classList.contains('active')){
  document.getElementById("minutes").innerHTML = breakTime;
  }
}