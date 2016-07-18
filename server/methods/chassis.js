import { chassis } from "../../imports/collections/collections";

Meteor.methods({
    "addChassis": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                chassis.insert({
                    caseType : obj.caseType,
                    fanNumber : obj.fanNumber,
                    manufacturer : obj.manufacturer,
                    model : obj.model,
                    name : obj.name,
                    opticBayNumber : obj.opticBayNumber,
                    pciSlotNumber : obj.pciSlotNumber,
                    psuMountPos : obj.psuMountPos,
                    sizeHeight : obj.sizeHeight,
                    sizeLength : obj.sizeLength,
                    sizeWidth : obj.sizeWidth,
                    price : obj.price,
                    stock : obj.stock,
                    website : obj.website
                });
            }
        }
    },
    "editChassis": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                chassis.update(id,{
                    $set:{
                        caseType : obj.caseType,
                        fanNumber : obj.fanNumber,
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        opticBayNumber : obj.opticBayNumber,
                        pciSlotNumber : obj.pciSlotNumber,
                        psuMountPos : obj.psuMountPos,
                        sizeHeight : obj.sizeHeight,
                        sizeLength : obj.sizeLength,
                        sizeWidth : obj.sizeWidth,
                        price : obj.price,
                        stock : obj.stock,
                        website : obj.website
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
    }
});