let hours=0;
let minutes=0;
let seconds=0;
let lapTimes=[];
let intervalid;
let isRunning=false;

const startButton=document.getElementById('start-button');
const pauseButton=document.getElementById('pause-button');
const resetButton=document.getElementById('reset-button');
const lapButton=document.getElementById('lap-button');
const hoursElement=document.getElementById('hours');
const minutesElement=document.getElementById('minutes');
const secondsElement=document.getElementById('seconds');
const lapTimesList=document.getElementById('lap-times-list');

startButton.addEventListener('click',startStopwatch);
pauseButton.addEventListener('click',pauseStopwatch);
resetButton.addEventListener('click',resetStopwatch);
lapButton.addEventListener('click',recordLapTime);

function startStopwatch(){
    if(!isRunning){
        intervalid=setInterval(updateStopwatch,1000);
        isRunning=true;
        startButton.disabled=true;
        pauseButton.disabled=false;
    }
}
function pauseStopwatch(){
    if(isRunning){
        clearInterval(intervalid);
        isRunning=false;
        startButton.disabled=false;
        pauseButton.disabled=true;
    }
}
function resetStopwatch(){
    clearInterval(intervalid);
    hours=0;
    minutes=0;
    seconds=0;
    lapTimes=[];
    isRunning=false;
    startButton.disabled=false;
    pauseButton.disabled=true;
    hoursElement.textContent='00';
    minutesElement.textContent='00';
    secondsElement.textContent='00';
    lapTimesList.innerHTML=":";
}
function updateStopwatch(){
    seconds++;
    if(seconds===60){
        minutes++;
        seconds=0;
    }
    if(minutes===60){
        hours++;
        minutes=0;
    }
    hoursElement.textContent=hours.toString().padStart(2,'0');
    minutesElement.textContent=minutes.toString().padStart(2,'0');
    secondsElement.textContent=seconds.toString().padStart(2,'0');
}
function recordLapTime(){
    if(isRunning){
        const lapTime=`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
        lapTimes.push(lapTime);
        const lapTimeElement=document.createElement('li');
        lapTimeElement.textContent=`${lapTimes.length}:${lapTime}`;
        lapTimesList.appendChild(lapTimeElement);
    }
}