import { memory } from "../../imports/collections/collections";

Meteor.methods({
    "addMemory": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                memory.insert({
                    clockSpeed : obj.clockSpeed,
                    generation : obj.generation,
                    manufacturer : obj.manufacturer,
                    model : obj.model,
                    name : obj.name,
                    platform : obj.platform,
                    price : obj.price,
                    size : obj.size,
                    stock : obj.stock,
                    website : obj.website
                });
            }
        }
    },
    "editMemory": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                memory.update(id,{
                    $set:{
                        clockSpeed : obj.clockSpeed,
                        generation : obj.generation,
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        platform : obj.platform,
                        price : obj.price,
                        size : obj.size,
                        stock : obj.stock,
                        website : obj.website
                    }
                });
            }
        }
    },
    "deleteMemory": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                memory.remove(obj._id);
            }
        }
    }
});