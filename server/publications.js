import { chassis, cooling, cpu, gpu, memory, motherboard, psu, serverRacks, soundCard, storage} from "../imports/collections/collections";

Meteor.publish('chassis', ()=>{
    return chassis.find();
});
Meteor.publish('cooling', ()=>{
    return cooling.find();
});
Meteor.publish('cpu', ()=>{
    return cpu.find();
});
Meteor.publish('gpu', ()=>{
    return gpu.find();
});
Meteor.publish('memory', ()=>{
    return memory.find();
});
Meteor.publish('motherboard', ()=>{
    return motherboard.find();
});
Meteor.publish('psu', ()=>{
    return psu.find();
});
Meteor.publish('serverRacks', ()=>{
    return serverRacks.find();
});
Meteor.publish('soundCard', ()=>{
    return soundCard.find();
});
Meteor.publish('storage', ()=>{
    return storage.find();
});