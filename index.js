document.addEventListener('DOMContentLoaded', () => {
    // const timeout = setInterval (() => {
    //  alert('hello world');
    // }, 3000); //1000 ms = 1 s

    // const counter = 0;

    // const interval =  setInterval(function (){
    //     counter++;
    //     console.log(`counter is now: ${counter}`);

    //     if (counter >= 5){
    //         clearInterval(interval);
    //     }
    // }, 5000) //5000ms = 5s

    // const timeout = setTimeout(function () {
    // alert ('i am timeout');
    // }, 3000);

    const btn = document.querySelector('.button');
    const item = document.querySelector('.item');
    const container = document.querySelector('.container');

    //event bubbling podnyatia sobytii

    btn.addEventListener('click', () => {
        alert('i am button🥰');
        btn.style.background = 'blue';
        
        // e.stopPropagation();

    });

    item.addEventListener('click', () => {
        alert('i am item🧚');
        item.style.background = 'yellow';
    });
    
    item.addEventListener('click', () => {
        alert('i am container 🧠');
        container.style.background = 'gray';
    });
    

});