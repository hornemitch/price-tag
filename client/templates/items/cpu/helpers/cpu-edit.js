import { cpu } from "../../../../../imports/collections/collections";

Template.CpuEdit.helpers({
    "processor": ()=> {
        Meteor.subscribe("cpu");
        const id = FlowRouter._current.params.id;
        return cpu.findOne(id);
    }
});

