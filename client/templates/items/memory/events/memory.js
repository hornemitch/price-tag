Template.MemoryMain.events({
    "click .delete-icon"(){
        const obj = this;
        const user = Meteor.user();
        if(window.confirm("Do you want to delete this item")){
            Meteor.call("deleteMemory", obj, user);
        }
    },
    "click .edit-icon"(){
        let path = "/memory/edit/" + this._id;
        FlowRouter.go(path);
    },
    "click .increase-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("increaseMemory", obj, user);
    },
    "click .decrease-icon"(){
        const obj = this;
        const user = Meteor.user();
        Meteor.call("decreaseMemory", obj, user);
    }
});