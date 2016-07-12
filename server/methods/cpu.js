import { cpu } from "../../imports/collections/collections";

Meteor.methods({
    "addCpu": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cpu.insert({
                    name: obj.name,
                    manufacturer: obj.manufacturer,
                    model: obj.model,
                    socket: obj.socket,
                    price: obj.price,
                    description: obj.description,
                    website: obj.website,
                    stock: "0"
                });
            }
            else {
                console.log("No authorseru!!!");
            }
        }
    },
    "editCpu": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cpu.update(id,{
                    $set:{
                        name: obj.name,
                        manufacturer: obj.manufacturer,
                        model: obj.model,
                        socket: obj.socket,
                        price: obj.price,
                        description: obj.description,
                        website: obj.website,
                        stock: obj.stock
                    }
                });
            }
            else {
                console.log("No authorseru!!!");
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
    },
    "increaseCpu": (obj, user)=>{
        let stock = obj.stock;
        stock++;

        if (user) {
            if (user.roles[0] == "admin") {
                cpu.update(obj._id, {
                    $set: {stock: stock}
                });
            }
        }
    },
    "decreaseCpu": (obj, user)=> {
        let stock = obj.stock;
        stock--;

        if (user) {
            if (user.roles[0] == "admin") {
                cpu.update(obj._id, {
                    $set: {stock: stock}
                });
            }
        }
    }
});