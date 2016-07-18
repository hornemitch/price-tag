import { serverRacks } from "../../imports/collections/collections";

Meteor.methods({
    "addServerRacks": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                serverRacks.insert({
                    height : obj.height,
                    length : obj.length,
                    manufacturer : obj.manufacturer,
                    model : obj.model,
                    name : obj.name,
                    price : obj.price,
                    stock : obj.stock,
                    website : obj.website,
                    weight : obj.weight,
                    width : obj.width
                });
            }
        }
    },
    "editServerRacks": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                serverRacks.update(id,{
                    $set:{
                        height : obj.height,
                        length : obj.length,
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        price : obj.price,
                        stock : obj.stock,
                        website : obj.website,
                        weight : obj.weight,
                        width : obj.width
                    }
                });
            }
        }
    },
    "deleteServerRacks": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                serverRacks.remove(obj._id);
            }
        }
    }
});