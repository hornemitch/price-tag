import { cooling } from "../../imports/collections/collections";

Meteor.methods({
    "addCooling": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cooling.insert({
                    name: obj.name,
                    manufacturer: obj.manufacturer,
                    model: obj.model,
                    type: obj.type,
                    price: obj.price,
                    led: obj.led,
                    rpm: obj.rpm,
                    size: obj.size,
                    description: obj.description,
                    website: obj.website,
                    stock: "0"
                });
            }
        }
    },
    "editCooling": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cooling.update(id,{
                    $set:{
                        name: obj.name,
                        manufacturer: obj.manufacturer,
                        model: obj.model,
                        type: obj.type,
                        price: obj.price,
                        led: obj.led,
                        rpm: obj.rpm,
                        size: obj.size,
                        description: obj.description,
                        website: obj.website,
                        stock: obj.stock
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
    },
    "increaseCooling": (obj, user)=>{
        let stock = obj.stock;
        stock++;

        if (user) {
            if (user.roles[0] == "admin") {
                cooling.update(obj._id, {
                    $set: {stock: stock}
                });
            }
        }
    },
    "decreaseCooling": (obj, user)=> {
        let stock = obj.stock;
        stock--;

        if (user) {
            if (user.roles[0] == "admin") {
                cooling.update(obj._id, {
                    $set: {stock: stock}
                });
            }
        }
    }
});