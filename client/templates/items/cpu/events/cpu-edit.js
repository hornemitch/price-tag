Template.CpuEdit.events({
    "click #backButton"(){
        FlowRouter.go("/cpu");
    },
    "submit #edit-form" (e){
        e.preventDefault();

        const user = Meteor.user();

        let Object = {
            name : e.target.name.value,
            manufacturer : e.target.manufacturer.value,
            model : e.target.model.value,
            socket : e.target.socket.value,
            price : e.target.price.value,
            description : e.target.description.value,
            website : e.target.website.value,
            stock: e.target.stock.value
        };

        Meteor.call("editCpu", FlowRouter._current.params.id, Object, user);
        FlowRouter.go("/cpu");
    }
});