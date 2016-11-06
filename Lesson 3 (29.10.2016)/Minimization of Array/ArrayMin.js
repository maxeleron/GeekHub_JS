(function() {
    /*function comparator(a, b) {
        return a > b;
    }*/

    document.write('<h1>Full Array</h1><div id="fullArray"></div>');
    var randArr = [];
    for (var i = 0; i < 1000; i++) {
        randArr.push(Math.random() * 10000);
        document.write('<div class="arrElement">' + randArr[i].toFixed(3) + '</div><wbr>');
    }
    document.write('<hr>');

    randArr.sort(function(a, b) { return a - b; });

    var minArr = [];
    for (var i = 0, j = 0; i < 1000; i += 20, j++) {
        minArr[j] = randArr[i];
        document.write('<div class="arrElement" style="background: yellow;">' + minArr[j].toFixed(3) + '</div><wbr>');
    }
})()