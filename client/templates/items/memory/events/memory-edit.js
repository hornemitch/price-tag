Template.GpuEdit.events({
    "click #backButton"(){
        FlowRouter.go("/gpu");
    },
    "submit #edit-form" (e){
        e.preventDefault();

        const user = Meteor.user();

        let Object = {
            coreClock : e.target.coreClock.value,
            description : e.target.description.value,
            manufacturer : e.target.manufacturer.value,
            memory : e.target.memory.value,
            model : e.target.model.value,
            name : e.target.name.value,
            pci : e.target.pci.value,
            price : e.target.price.value,
            stock: e.target.stock.value,
            website : e.target.website.value
        };

        Meteor.call("editGpu", FlowRouter._current.params.id, Object, user);
        FlowRouter.go("/gpu");
    }
});