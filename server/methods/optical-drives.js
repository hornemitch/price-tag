import { opticalDrive } from "../../imports/collections/collections";

Meteor.methods({
    "addOpticalDrive": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                opticalDrive.insert({
                    manufacturer : obj.manufacturer,
                    model : obj.model,
                    name : obj.name,
                    price : obj.price,
                    stock : obj.stock,
                    type : obj.type,
                    website : obj.website
                });
            }
        }
    },
    "editOpticalDrive": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                opticalDrive.update(id,{
                    $set:{
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        price : obj.price,
                        stock : obj.stock,
                        type : obj.type,
                        website : obj.website
                    }
                });
            }
        }
    },
    "deleteOpticalDrive": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                opticalDrive.remove(obj._id);
            }
        }
    }
});