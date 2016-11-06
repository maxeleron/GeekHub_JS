function sumInterface() {
    var arg1 = prompt('Enter the first number');
    var arg2 = prompt('Enter the seconnd number');

    var sum = parseFloat(arg1) + parseFloat(arg2);

    alert('The sum is ' + sum);
}

function countPrices() {
    var price1 = document.querySelector("#price1");
    var price2 = document.querySelector("#price2");
    var priceAnswer = document.querySelector("#priceAnswer");

    var sum = parseFloat(price1.value) + parseFloat(price2.value);
    priceAnswer.value = sum.toFixed(2);
}

function GetDeciamal() {
    var arg = prompt('Enter the number');
    var dotIndex = arg.indexOf('.');
    if (dotIndex != -1) {
        arg = "0" + arg.slice(dotIndex, arg.length);
    } else {
        arg = "0.0";
    }
    alert(arg);
}

var goldF = (1 + Math.sqrt(5)) / 2;

function fibBinet() {
    var n = prompt('Enter n');
    n = parseFloat(n);
    alert(Math.pow(goldF, n) / Math.sqrt(5));
}

function randZeroMax() {
    var max = prompt('Enter MAX');
    max = parseFloat(max);

    alert(Math.random() * max)
}

function randFloat() {
    var max = prompt('Enter MAX');
    var min = prompt('Enter MIN');
    max = parseFloat(max);
    min = parseFloat(min);

    alert(min + Math.random() * (max - min))
}

function randInt() {
    var max = prompt('Enter MAX');
    var min = prompt('Enter MIN');
    max = parseFloat(max);
    min = parseFloat(min);

    alert(Math.random(min + Math.random() * (max - min)))
}