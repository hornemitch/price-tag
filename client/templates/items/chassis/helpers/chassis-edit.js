import { chassis } from "../../../../../imports/collections/collections";

Template.ChassisEdit.helpers({
    "chassis": ()=> {
        Meteor.subscribe("chassis");
        const id = FlowRouter._current.params.id;
        return chassis.findOne(id);
    }
});

