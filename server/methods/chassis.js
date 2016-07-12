import { chassis } from "../../imports/collections/collections";

Meteor.methods({
    "addChassis": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                chassis.insert({
                    name: obj.name,
                    manufacturer: obj.manufacturer,
                    model: obj.model,
                    type: obj.type,
                    price: obj.price,
                    psuMount: obj.psuMount,
                    description: obj.description,
                    website: obj.website,
                    stock: "0"
                });
            }
        }
    },
    "editChassis": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                chassis.update(id,{
                    $set:{
                        name: obj.name,
                        manufacturer: obj.manufacturer,
                        model: obj.model,
                        type: obj.type,
                        price: obj.price,
                        psuMount: obj.psuMount,
                        description: obj.description,
                        website: obj.website,
                        stock: obj.stock
                    }
                });
            }
        }
    },
    "deleteChassis": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                chassis.remove(obj._id);
            }
        }
    },
    "increaseChassis": (obj, user)=>{
        let stock = obj.stock;
        stock++;

        if (user) {
            if (user.roles[0] == "admin") {
                chassis.update(obj._id, {
                    $set: {stock: stock}
                });
            }
        }
    },
    "decreaseChassis": (obj, user)=> {
        let stock = obj.stock;
        stock--;

        if (user) {
            if (user.roles[0] == "admin") {
                chassis.update(obj._id, {
                    $set: {stock: stock}
                });
            }
        }
    }
});