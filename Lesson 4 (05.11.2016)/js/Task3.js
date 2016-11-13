function Reduce(array, reduceFunc, initialValue){
    for (var i = 0; i < array.length; i++) {
        initialValue = reduceFunc(initialValue, array[i]);
    }
    return initialValue;
}

function Push(array, newItem){
    array[array.length] = newItem;
}

function Pop(array){
    return array.splice([array.length]-1, [array.length]-1);
}

function Filter(array, selectorFunc){
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if(selectorFunc(array[i]) === true)
        {
            Push(newArr, array[i]);
        }
    }
    return newArr;
}

function ForEach(array, func){
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

function Map(array, mapFunc){
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        array[i] = mapFunc(array[i]);
    }
}

function Some(array, someFunc){
    for (var i = 0; i < array.length; i++) {
        if(someFunc(array[i]) === true){
            return true;
        };
    }
    return false;
}
