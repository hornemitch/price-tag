Template.GpuMain.events({
    "click .delete-icon"(){
        const obj = this;
        const user = Meteor.user();
        if(window.confirm("Do you want to delete this item")){
            Meteor.call("deleteGpu", obj, user);
        }
    },
    "click .edit-icon"(){
        let path = "/gpu/edit/" + this._id;
        FlowRouter.go(path);
    },
    "click .increase-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("increaseGpu", obj, user);
    },
    "click .decrease-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("decreaseGpu", obj, user);
    }
});