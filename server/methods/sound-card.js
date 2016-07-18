import { soundCard } from "../../imports/collections/collections";

Meteor.methods({
    "addSoundCard": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                soundCard.insert({
                    channels : obj.channels,
                    housing : obj.housing,
                    manufacturer : obj.manufacturer,
                    model : obj.model,
                    name : obj.name,
                    price : obj.price,
                    stock : obj.stock,
                    website : obj.website
                });
            }
        }
    },
    "editSoundCard": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                soundCard.update(id,{
                    $set:{
                        channels : obj.channels,
                        housing : obj.housing,
                        manufacturer : obj.manufacturer,
                        model : obj.model,
                        name : obj.name,
                        price : obj.price,
                        stock : obj.stock,
                        website : obj.website
                    }
                });
            }
        }
    },
    "deleteSoundCard": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                soundCard.remove(obj._id);
            }
        }
    }
});