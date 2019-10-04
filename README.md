# Clocks Study
See it Live: https://john-azzaro.github.io/Study-Clocks/

<br>

## What is Clocks Study?
"Clocks Study" is an examination of analog clock functionality collected in one handy repository.  The study includes a fully functional analog clock example with hour, minute, and second hands, and a unique stylization.

Here are a few questions from the study to consider:

* [What are the key takeaways from the Clocks Study?](#What-are-the-key-takeaways-from-the-Clocks-Study)
* [](#)
* [](#)

<br>

## What are the key takeaways from the Clocks Study?
<br>
<dl>

### The setInterval method repeats a given function every given time-interval.
-----
<dd>

The ```setInterval``` is a *timing event* that repeats the execution of a function continually, much like the ``` setTimeout``` function that waits for a specific amount of time to expire before executing a function.  What's really neat about the ``` setInterval``` function is that in the case of this clock prototype, we have an animated task (i.e. movement of the hands of the clock) based on a simple time based trigger.  
```JavaScript
    function runClock() {                   // When runClock is run...
        setInterval(setClock, 1000);        // Use setInterval to call "setClock" every 1000 milliseconds.
    }
```
</dd>
<dd>

</dd>




</dl>
## Does the Clocks Study feature commentary?
Yes! I use extensive Commentary (mostly in the form of my thought process) so that the new and curious can follow the logic in the program and get an idea of my reasoning behind each and every line of code.  In addition to my line-by-line commantary, I also provide a Process text file that gives a good outline of my design and implementation process. 

<br>

## What are the key features of the Clocks Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future.  For a complete list of current and future changes, see below:


| **Features:**                            | **Feature Notes:**                           |
| ---------------------------------------- | ----------------------------------------------|
| Hour-hand                                |                                               |
| Minute-hand                              |                                               |
| Second-hand                              |           current time updated every second  |  


<br>

## Screenshots

![analogClockScreenCap](https://user-images.githubusercontent.com/37447586/61159731-d880d800-a4b1-11e9-98b9-b49af598df48.png)
