import { cooling } from "../../imports/collections/collections";

Meteor.methods({
    "addCooling": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cooling.insert({
                    coolingType : obj.coolingType,
                    led : obj.led,
                    manufacturer : obj.manufacturer,
                    model : obj.model,
                    name : obj.name,
                    price : obj.price,
                    rpm : obj.rpm,
                    size : obj.size,
                    stock : obj.stock,
                    website : obj.website
                });
            }
        }
    },
    "editCooling": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cooling.update(id,{
                    $set:{
                        coolingType : obj.coolingType,
                        led : obj.led,
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        price : obj.price,
                        rpm : obj.rpm,
                        size : obj.size,
                        stock : obj.stock,
                        website : obj.website
                    }
                });
            }
        }
    },
    "deleteCooling": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cooling.remove(obj._id);
            }
        }
    }
});