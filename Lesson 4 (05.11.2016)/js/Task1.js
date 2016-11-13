var block = document.querySelector(".animatingBlock");

var top = 50;
var left = 50;

setInterval(
    function(){
        var newLeft = left + (Math.random()<0.5? -1 : 1);
        var newTop =  top+  (Math.random()<0.5? -1 : 1);
        block.style.top = newTop + "%";
        block.style.left = newLeft + "%";
    }, 50);