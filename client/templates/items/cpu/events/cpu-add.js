Template.CpuAdd.events({
    "click #backButton"(){
        FlowRouter.go("/cpu");
    },
    "submit #add-form" (e){
        e.preventDefault();

        const user = Meteor.user();

        let Processor = {
            name : e.target.name.value,
            manufacturer : e.target.manufacturer.value,
            model : e.target.model.value,
            socket : e.target.socket.value,
            price : e.target.price.value,
            description : e.target.description.value,
            website : e.target.website.value
        };

        Meteor.call("addCpu", Processor, user);
        FlowRouter.go("/cpu");
    }
});