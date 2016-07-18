import { externalStorage } from "../../imports/collections/collections";

Meteor.methods({
    "addExternalStorage": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                externalStorage.insert({
                    capacity : obj.capacity,
                    manufacturer : obj.manufacturer,
                    model : obj.model,
                    name : obj.name,
                    powered : obj.powered,
                    price : obj.price,
                    stock : obj.stock,
                    type : obj.type,
                    website : obj.website
                });
            }
        }
    },
    "editExternalStorage": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                externalStorage.update(id,{
                    $set:{
                        capacity : obj.capacity,
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        powered : obj.powered,
                        price : obj.price,
                        stock : obj.stock,
                        type : obj.type,
                        website : obj.website
                    }
                });
            }
        }
    },
    "deleteExternalStorage": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                externalStorage.remove(obj._id);
            }
        }
    }
});