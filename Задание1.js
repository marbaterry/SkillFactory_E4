const parent = {
    a: 1,
    b: 2,
}

const child = Object.create(parent);
child.c = "3";


function checkObj(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`${key}:${obj[key]}`)
        }
    }
}
console.log(child)
checkObj(child)