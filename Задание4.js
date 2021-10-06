// приборы
//
// PC
// - включен
// - режим сна
// - название
// - энергопотребление
//
// LAMP
// - включен
// - название
// - энергопотребление


function ElectricalAppliances(power, name){
    this.name = name,
    this.energy = power,
    this.enabed = false
}

ElectricalAppliances.prototype.turnPower = function (){
    if (this.enabed === false){
        this.enabed = true
    }else{
        this.enabed = false
    }
}

function Computers(power, name){
    this.name = name,
    this.energy = power,
    this.enabed = false,
    this.savemode = false
}

Computers.prototype = new ElectricalAppliances()
Computers.prototype.saveEnergy = function (){
    if (this.savemode === false){
        this.savemode = true
        this.energy = this.energy / 2
    }else{
        this.savemode = false
        this.energy = this.energy * 2
    }
}
var mylist = [];
const  pc =  new Computers(500, "my_pc")
const lamp = new ElectricalAppliances(300, "bad_lamp")

mylist.push(pc);
mylist.push(lamp);



function getFullpower(){
    sum = 0
    for (let i in mylist){
        if (mylist[i].enabed === true){
            sum = sum + mylist[i].energy
        }
    }
    return `Общий расход ${sum} Киловат`
}