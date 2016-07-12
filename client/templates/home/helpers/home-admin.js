import { chassis, cooling, cpu, gpu, memory, motherboard, psu, serverRacks,
soundCard, storage } from "../../../../imports/collections/collections";

Template.HomeAdmin.helpers({
    "user": ()=>{
        return Meteor.user().profile.name.first;
    },
    "chassisCount": ()=>{
        Meteor.subscribe("chassis");
        return chassis.find().fetch().length;
    },
    "coolingCount": ()=>{
        Meteor.subscribe("cooling");
        return cooling.find().fetch().length;
    },
    "cpuCount": ()=>{
        Meteor.subscribe("cpu");
        return cpu.find().fetch().length;
    },
    "gpuCount": ()=>{
        Meteor.subscribe("gpu");
        return gpu.find().fetch().length;
    },
    "memoryCount": ()=>{
        Meteor.subscribe("memory");
        return memory.find().fetch().length;
    },
    "motherboardCount": ()=>{
        Meteor.subscribe("motherboard");
        return motherboard.find().fetch().length;
    },
    "psuCount": ()=>{
        Meteor.subscribe("psu");
        return psu.find().fetch().length;
    },
    "serverRacksCount": ()=>{
        Meteor.subscribe("serverRacks");
        return serverRacks.find().fetch().length;
    },
    "soundCardCount": ()=>{
        Meteor.subscribe("soundCard");
        return soundCard.find().fetch().length;
    },
    "storageCount": ()=>{
        Meteor.subscribe("storage");
        return storage.find().fetch().length;
    }
});