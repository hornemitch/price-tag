import { cpu } from "../../imports/collections/collections";

Meteor.methods({
    "addCpu": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                cpu.insert({
                    description: obj.description,
                    manufacturer: obj.manufacturer,
                    model: obj.model,
                    name: obj.name,
                    price: obj.price,
                    socket: obj.socket,
                    stock: "0",
                    website: obj.website
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
                        description: obj.description,
                        manufacturer: obj.manufacturer,
                        model: obj.model,
                        name: obj.name,
                        price: obj.price,
                        socket: obj.socket,
                        stock: obj.stock,
                        website: obj.website
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