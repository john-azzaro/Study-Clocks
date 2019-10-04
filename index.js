'use strict';

const hourHand = document.querySelector('[hour-hand]');                // Query selector for data attribute hour-hand
const minuteHand = document.querySelector('[minute-hand]');            // Query selector for data attribute minute-hand
const secondHand = document.querySelector('[second-hand]');            // Query selector for data attribute second-hand

function setClock() {
    const currentDate = new Date();                                     // to get current date, call new Date constructor.
    const seconds = currentDate.getSeconds() / 60;                      // to get seconds, take currentDate.getSeconds and since 60 seconds in a minute, divide by 60.
    const minutes = (seconds + currentDate.getMinutes()) / 60;          // To have minute hand gradually move between minutes on clock, have minutes equal seconds plus current minute              
    const hours = (minutes + currentDate.getHours()) / 12;              // To have the hour hand grdually move around the clock, have hours equal minutes plus  
    setClockRotation(secondHand, seconds);       
    setClockRotation(minuteHand, minutes);       
    setClockRotation(hourHand, hours);       
}

function setClockRotation(element, rotation) {                           // To set the hands to the proper times. which take the element we want to rotate and the rotation we want to use:
    element.style.setProperty('--rotation', rotation * 360)              // so select the element you want, take the style of that element, and call the setProperty method which take the property we want ot set (i.e. --rotation) and set to rotation of 360 degrees for the complete rotation.
}             

function runClock() {                                                    // When runClock is run...
    setInterval(setClock, 1000);                                         //  ... use setInterval to call "setClock" every 1000 milliseconds.
}

function initialize() {                                                  // When the app is initialized, run runClock.
    runClock();
}

$(initialize);                                                           // initialize the app to run on start.