import { storage } from "../../imports/collections/collections";

Meteor.methods({
    "addStorage": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                storage.insert({
                    benchmark1 : obj.benchmark1,
                    benchmark2 : obj.benchmark2,
                    capacity : obj.capacity,
                    manufacturer : obj.manufacturer,
                    model : obj.model,
                    name : obj.name,
                    price : obj.price,
                    readSpeed : obj.readSpeed,
                    size : obj.size,
                    stock : obj.stock,
                    type : obj.type,
                    writeSpeed : obj.writeSpeed,
                    website : obj.website
                });
            }
        }
    },
    "editStorage": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                storage.update(id,{
                    $set:{
                        benchmark1 : obj.benchmark1,
                        benchmark2 : obj.benchmark2,
                        capacity : obj.capacity,
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        price : obj.price,
                        readSpeed : obj.readSpeed,
                        size : obj.size,
                        stock : obj.stock,
                        type : obj.type,
                        writeSpeed : obj.writeSpeed,
                        website : obj.website
                    }
                });
            }
        }
    },
    "deleteStorage": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                storage.remove(obj._id);
            }
        }
    }
});