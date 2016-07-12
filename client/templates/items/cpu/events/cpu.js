Template.CpuMain.events({
    "click .delete-icon"(){
        const obj = this;
        const user = Meteor.user();
        if(window.confirm("Do you want to delete this item")){
            Meteor.call("deleteCpu", obj, user);
        }
    },
    "click .edit-icon"(){
        let path = "/cpu/edit/" + this._id;
        FlowRouter.go(path);
    },
    "click .increase-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("increaseCpu", obj, user);
    },
    "click .decrease-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("decreaseCpu", obj, user);
    }
});