import { gpu } from "../../../../../imports/collections/collections";

Template.GpuEdit.helpers({
    "gpu": ()=> {
        Meteor.subscribe("gpu");
        const id = FlowRouter._current.params.id;
        return gpu.findOne(id);
    }
});

