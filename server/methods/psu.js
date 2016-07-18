import { psu } from "../../imports/collections/collections";

Meteor.methods({
    "addPSU": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                psu.insert({
                    benchmark1 : obj.	benchmark1,
                    benchmark2 : obj.	benchmark2,
                    certification : obj.	certification,
                    manufacturer : obj.	manufacturer,
                    model : obj.	model,
                    modular : obj.	modular,
                    molexCableNumber : obj.	molexCableNumber,
                    name : obj.	name,
                    pciECableNumber : obj.	pciECableNumber,
                    powerOutput : obj.	powerOutput,
                    price : obj.	price,
                    sataCableNumber : obj.	sataCableNumber,
                    stock : obj.	stock,
                    website : obj.	website
                });
            }
        }
    },
    "editPSU": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                psu.update(id,{
                    $set:{
                        benchmark1 : obj.	benchmark1,
                        benchmark2 : obj.	benchmark2,
                        certification : obj.	certification,
                        manufacturer : obj.	manufacturer,
                        model : obj.	model,
                        modular : obj.	modular,
                        molexCableNumber : obj.	molexCableNumber,
                        name : obj.	name,
                        pciECableNumber : obj.	pciECableNumber,
                        powerOutput : obj.	powerOutput,
                        price : obj.	price,
                        sataCableNumber : obj.	sataCableNumber,
                        stock : obj.	stock,
                        website : obj.	website
                    }
                });
            }
        }
    },
    "deletePSU": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                psu.remove(obj._id);
            }
        }
    }
});