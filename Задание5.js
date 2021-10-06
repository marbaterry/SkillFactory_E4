class ElectricalAppliances{
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
        this.enabled = false;
    }
    turnOn(){
        if (this.enabled === false){
            this.enabled = true
        }else{
            this.enabled = false
        }
    }
}
class Computers extends ElectricalAppliances{
    constructor(name, energy) {
        super(name, energy);
        this.enabled = false;
        this.savemode = false;
    }
    saveEnergy(){
        if (this.savemode === false){
            this.savemode = true
            this.energy = this.energy / 2
        }else{
            this.savemode = false
            this.energy = this.energy * 2
        }
    }
}
function getFullpower(){
    sum = 0
    for (let i in mylist){
        if (mylist[i].enabled === true){
            sum = sum + mylist[i].energy
        }
    }
    return `Общий расход ${sum} Киловат`
}

var mylist = [];
const  pc =  new Computers("my_pc", 500)
const lamp = new ElectricalAppliances("bad_lamp", 300)
mylist.push(pc);
mylist.push(lamp);

pc.turnOn()
pc.saveEnergy()
lamp.turnOn()


getFullpower()