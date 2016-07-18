import { chassis } from "../../../../../imports/collections/collections"

Template.ChassisMain.events({
    "click .delete-icon"(){
        const obj = this;
        const user = Meteor.user();
        if(window.confirm("Do you want to delete this item")){
            Meteor.call("deleteChassis", obj, user);
        }
    },
    "click .edit-icon"(){
        let path = "/chassis/edit/" + this._id;
        FlowRouter.go(path);
    }
});