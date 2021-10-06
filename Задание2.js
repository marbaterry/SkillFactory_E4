const object = {
    a: 1,
    b: 2,
    c: 3,
}

function checkKey(key, obj){
    let result = false;
    for (let i in obj){
        if (i === key){
            result = true
        }
    }
    return result
}

checkKey("g", object)