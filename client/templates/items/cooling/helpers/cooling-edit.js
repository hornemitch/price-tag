import { cooling } from "../../../../../imports/collections/collections";

Template.CoolingEdit.helpers({
    "cooler": ()=> {
        Meteor.subscribe("cooling");
        const id = FlowRouter._current.params.id;
        return cooling.findOne(id);
    }
});

