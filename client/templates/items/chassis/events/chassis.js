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
    },
    "click .increase-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("increaseChassis", obj, user);
    },
    "click .decrease-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("decreaseChassis", obj, user);
    }
});