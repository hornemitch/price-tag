Template.CoolingEdit.events({
    "click #backButton"(){
        FlowRouter.go("/cooling");
    },
    "submit #edit-form" (e){
        e.preventDefault();

        const user = Meteor.user();

        let Object = {
            name : e.target.name.value,
            manufacturer : e.target.manufacturer.value,
            model : e.target.model.value,
            type : e.target.type.value,
            price : e.target.price.value,
            led : e.target.led.value,
            rpm : e.target.rpm.value,
            size : e.target.size.value,
            description: e.target.description.value,
            website : e.target.website.value,
            stock: e.target.stock.value
        };


        Meteor.call("editCooling", FlowRouter._current.params.id, Object, user);
        FlowRouter.go("/cooling");
    }
});