import { motherboard } from "../../imports/collections/collections";

Meteor.methods({
    "addMotherboard": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                motherboard.insert({
                    caseCompatibility : obj.caseCompatibility,
                    cpuAccommodation : obj.cpuAccommodation,
                    generation : obj.generation,
                    manufacturer : obj.manufacturer,
                    memorySlotNumber : obj.memorySlotNumber,
                    memoryType : obj.memoryType,
                    model : obj.model,
                    name : obj.name,
                    pciSlotNumber : obj.pciSlotNumber,
                    price : obj.price,
                    sataPortNumber : obj.sataPortNumber,
                    soundCardType : obj.soundCardType,
                    soundCardChannels : obj.soundCardChannels,
                    stock : obj.stock,
                    videoDviNumber : obj.videoDviNumber,
                    videoVgaNumber : obj.videoVgaNumber,
                    videoHdNumber : obj.videoHdNumber,
                    usbCompatibility : obj.usbCompatibility,
                    website : obj.website
                });
            }
        }
    },
    "editMotherboard": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                motherboard.update(id,{
                    $set:{
                        caseCompatibility : obj.caseCompatibility,
                        cpuAccommodation : obj.cpuAccommodation,
                        generation : obj.generation,
                        manufacturer : obj.manufacturer,
                        memorySlotNumber : obj.memorySlotNumber,
                        memoryType : obj.memoryType,
                        model : obj.model,
                        name : obj.name,
                        pciSlotNumber : obj.pciSlotNumber,
                        price : obj.price,
                        sataPortNumber : obj.sataPortNumber,
                        soundCardType : obj.soundCardType,
                        soundCardChannels : obj.soundCardChannels,
                        stock : obj.stock,
                        videoDviNumber : obj.videoDviNumber,
                        videoVgaNumber : obj.videoVgaNumber,
                        videoHdNumber : obj.videoHdNumber,
                        usbCompatibility : obj.usbCompatibility,
                        website : obj.website
                    }
                });
            }
        }
    },
    "deleteMotherboard": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                motherboard.remove(obj._id);
            }
        }
    }
});