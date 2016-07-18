import { memoryKit } from "../../imports/collections/collections";

Meteor.methods({
    "addMemoryKit": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                memoryKit.insert({
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
    "editMemoryKit": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                memoryKit.update(id,{
                    $set:{
                        clockSpeed : obj.clockSpeed,
                        description : obj.description,
                        generation : obj.generation,
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        platform : obj.platform,
                        price : obj.price,
                        sizeStickNumber : obj.sizeStickNumber,
                        sizeTotal : obj.sizeTotal,
                        stock : obj.stock,
                        website : obj.website
                    }
                });
            }
        }
    },
    "deleteMemoryKit": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                memoryKit.remove(obj._id);
            }
        }
    }
});