Template.GpuAdd.events({
    "click #backButton"(){
        FlowRouter.go("/gpu");
    },
    "submit #add-form" (e){
        e.preventDefault();

        const user = Meteor.user();

        let GPU = {
            coreClock : e.target.coreClock.value,
            description : e.target.description.value,
            manufacturer : e.target.manufacturer.value,
            memory : e.target.memory.value,
            model : e.target.model.value,
            name : e.target.name.value,
            pci : e.target.pci.value,
            price : e.target.price.value,
            website : e.target.website.value
        };

        Meteor.call("addGpu", GPU, user);
        FlowRouter.go("/gpu");
    }
});