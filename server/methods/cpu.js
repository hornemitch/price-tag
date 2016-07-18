import { cpu } from "../../imports/collections/collections";

Meteor.methods({
    "addCpu": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cpu.insert({
                    benchmarkUrl1 : obj.benchmarkUrl1,
                    benchmarkUrl2 : obj.benchmarkUrl2,
                    cacheSize : obj.cacheSize,
                    clockSpeedMin : obj.clockSpeedMin,
                    clockSpeedMax : obj.clockSpeedMax,
                    coreNumbers : obj.coreNumbers ,
                    generation : obj.generation,
                    manufacturer : obj.manufacturer,
                    model : obj.model,
                    name : obj.name,
                    price : obj.price,
                    stock : obj.stock,
                    website : obj.website
                });
            }
        }
    },
    "editCpu": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cpu.update(id,{
                    $set:{
                        benchmarkUrl1 : obj.benchmarkUrl1,
                        benchmarkUrl2 : obj.benchmarkUrl2,
                        cacheSize : obj.cacheSize,
                        clockSpeedMin : obj.clockSpeedMin,
                        clockSpeedMax : obj.clockSpeedMax,
                        coreNumbers : obj.coreNumbers ,
                        generation : obj.generation,
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        price : obj.price,
                        stock : obj.stock,
                        website : obj.website
                    }
                });
            }
        }
    },
    "deleteCpu": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cpu.remove(obj._id);
            }
            else {
                console.log("No authorseru!!!");
            }
        }
    }
});