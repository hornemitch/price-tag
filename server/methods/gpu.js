import { gpu } from "../../imports/collections/collections";

Meteor.methods({
    "addGpu": (obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                gpu.insert({
                    benchmarkUrl1 : obj.benchmarkUrl1,
                    benchmarkUrl2 : obj.benchmarkUrl2,
                    brand : obj.brand,
                    generaton : obj.generaton,
                    manufacturer : obj.manufacturer,
                    memoryTotal : obj.memoryTotal,
                    model : obj.model,
                    name : obj.name,
                    price : obj.price,
                    stock : obj.stock,
                    videoDpNumber : obj.videoDpNumber,
                    videoDviNumber : obj.videoDviNumber,
                    videoVgaNumber : obj.videoVgaNumber,
                    videoHdNumber : obj.videoHdNumber,
                    website : obj.website
                });
            }
        }
    },
    "editGpu": (id, obj, user)=>{
        if(user){
            if (user.roles[0] == "admin") {
                gpu.update(id,{
                    $set:{
                        benchmarkUrl1 : obj.benchmarkUrl1,
                        benchmarkUrl2 : obj.benchmarkUrl2,
                        brand : obj.brand,
                        generaton : obj.generaton,
                        manufacturer : obj.manufacturer,
                        memoryTotal : obj.memoryTotal,
                        model : obj.model,
                        name : obj.name,
                        price : obj.price,
                        stock : obj.stock,
                        videoDpNumber : obj.videoDpNumber,
                        videoDviNumber : obj.videoDviNumber,
                        videoVgaNumber : obj.videoVgaNumber,
                        videoHdNumber : obj.videoHdNumber,
                        website : obj.website
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
    }
});