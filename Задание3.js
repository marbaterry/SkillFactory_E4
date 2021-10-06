function Empty(){
    this.__proto__ = null;
}
let empty  = new Empty();
console.log(empty.getPrototypeOf)
