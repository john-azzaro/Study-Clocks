# Clocks Study
See it Live: https://john-azzaro.github.io/Study-Clocks/

<br>

## What is Clocks Study?
"Clocks Study" is an examination of analog clock functionality collected in one handy repository.  The study includes a fully functional analog clock example with hour, minute, and second hands, and a unique stylization.

Here are a few questions from the study to consider:

* [What are the key takeaways from the Clocks Study?](#What-are-the-key-takeaways-from-the-Clocks-Study)
* [Does the Clocks Study feature commentary?](#Does-the-Clocks-Study-feature-commentary)
* [What are the key features of the Clocks Study?](#What-are-the-key-features-of-the-Clocks-Study)
* [Screenshots](#Screenshots)

<br>

## What are the key takeaways from the Clocks Study?

<dl>

### The setInterval method repeats a given function every given time-interval.
-----
<dd>

The ```setInterval``` is a *timing event* that repeats the execution of a function continually, much like the ``` setTimeout``` function that waits for a specific amount of time to expire before executing a function.  What's really neat about the ``` setInterval``` function is that in the case of this clock prototype, we can have an animated task (i.e. movement of the hands of the clock) based on a simple time based trigger to make our clock function to the second... and minute... and hour.  
```JavaScript
    function runClock() {                   // When runClock is run...
        setInterval(setClock, 1000);        // Use setInterval to call "setClock" every 1000 milliseconds.
    }
```
</dd>
<br>

###  Use CSS variables for repeatable CSS properties to rotate an element. 
-----
<dd>

For this clock prototype, we have numbers 1 through 12 that we need to rotate around a fixed point on the surface of our circular clock.  To do this, we need to use the **transform** property, which lets you rotate, skew, or translate an element.  Now, you *could* add a ``` transform: rotate(Xdeg)``` property to each an every number on the clock.  However, the ancillary stylization would create a great deal more code than needed.  To keep things a bit more organized, you create a variable to apply the styling to mulitple elements.  
```Css
    .clock > .number {  
        position: absolute;      
        width: 100%;   
        height: 100%;  
        text-align: center;   
        transform: rotate(var(--rotation));            /* Using transform, you rotate using a --rotation variable....*/
        --rotation: 0;                                 /*... and set that variable to 0 to make sure we start at the 12 o'clock point...*/
    }

    .clock > .number1 {                        
        --rotation: 30deg;                             /* so when you select .number1, you will be able use rotation variable */
        font-size: 1rem;
        padding-top: 10px;
    }
```
</dd>

<br>

### Date constructors create accurate timestamps!
------
<dd>
In order to establish the correct time for the clock, you need to use a Data constructor.  In this case, we use a Date constructor without an parameters, however it should be noted that there are a few additional ways to establish time as well. 

```JavaScript
    const currentDate = new Date();     
    console.log(currentDate)            // Thu Oct 03 2019 22:00:42 GMT-0700 (Pacific Daylight Time)
```

</dd>

</dl>

<br>

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
