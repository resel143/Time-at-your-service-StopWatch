let name = 'selena';
console.log(name);

let time = document.getElementById('clock').value;

document.getElementById('start').addEventListener('click',function(){
    console.log(time);
});

let start = document.getElementById('start');
let stop= document.getElementById('stop');
let reset = document.getElementById('reset');
let timeMinutes = document.querySelector("#inputTime").elements[0];
let timeSeconds = document.querySelector("#inputTime").elements[1];
let showClock = document.getElementById('clock');



start.addEventListener('click', function(){
    let whatisthetime = timeMinutes.value + " : "+ timeSeconds.value;
    let ele = document.createElement('h2');
    ele.className='showingTimer';
    ele.innerHTML = whatisthetime;
    showClock.appendChild(ele);
})
stop.addEventListener('click', function(){
    // console.log(whatisthetime);
    
})
reset.addEventListener('click', function(){
    console.log(whatisthetime);
    // console.log(timeSeconds.value);
})
