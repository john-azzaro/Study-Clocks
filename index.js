'use strict';


setInterval(setClock, 1000)                                             // first, use setInterval to call "setClock" every 1000 milliseconds.

function setClock() {
    const currentDate = new Date();                                     // to get current date, call new Date constructor.
    const seconds = currentDate.getSeconds() / 60;                      // to get seconds, take currentDate.getSeconds and since 60 seconds in a minute, divide by 60.
    const minutes = (seconds + currentDate.getMinutes()) / 60;          // To have minute hand gradually move between minutes on clock, have minutes equal seconds plus current minute              
    const hours = (minutes + currentDate.getHours()) / 12;              // To have the hour hand grdually move around the clock, have hours equal minutes plus         
}