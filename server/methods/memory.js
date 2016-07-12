import { gpu } from "../../imports/collections/collections";

Meteor.methods({
    "addGpu": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                gpu.insert({
                    coreClock: obj.coreClock,
                    description: obj.description,
                    manufacturer: obj.manufacturer,
                    memory: obj.memory,
                    model: obj.model,
                    name: obj.name,
                    pci: obj.pci,
                    price: obj.price,
                    socket: obj.socket,
                    stock: "0",
                    website: obj.website
                });
            }
        }
    },
    "editGpu": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                gpu.update(id,{
                    $set:{
                        coreClock: obj.coreClock,
                        description: obj.description,
                        manufacturer: obj.manufacturer,
                        memory: obj.memory,
                        model: obj.model,
                        name: obj.name,
                        pci: obj.pci,
                        price: obj.price,
                        socket: obj.socket,
                        stock: obj.stock,
                        website: obj.website
                    }
                });
            }
        }
    },
    "deleteGpu": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                gpu.remove(obj._id);
            }
        }
    },
    "increaseGpu": (obj, user)=>{
        let stock = obj.stock;
        stock++;

        if (user) {
            if (user.roles[0] == "admin") {
                gpu.update(obj._id, {
                    $set: {stock: stock}
                });
            }
        }
    },
    "decreaseGpu": (obj, user)=> {
        let stock = obj.stock;
        stock--;

        if (user) {
            if (user.roles[0] == "admin") {
                gpu.update(obj._id, {
                    $set: {stock: stock}
                });
            }
        }
    }
});