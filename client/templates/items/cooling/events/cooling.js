Template.CoolingMain.events({
    "click .delete-icon"(){
        const obj = this;
        const user = Meteor.user();
        if(window.confirm("Do you want to delete this item")){
            Meteor.call("deleteCooling", obj, user);
        }
    },
    "click .edit-icon"(){
        let path = "/cooling/edit/" + this._id;
        FlowRouter.go(path);
    },
    "click .increase-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("increaseCooling", obj, user);
    },
    "click .decrease-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("decreaseCooling", obj, user);
    }
});