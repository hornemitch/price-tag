Template.CoolingAdd.events({
    "click #backButton"(){
        FlowRouter.go("/cooling");
    },
    "submit #add-form" (e){
        e.preventDefault();

        const user = Meteor.user();

        let Cooling = {
            name : e.target.name.value,
            manufacturer : e.target.manufacturer.value,
            model : e.target.model.value,
            type : e.target.type.value,
            price : e.target.price.value,
            led : e.target.led.value,
            rpm : e.target.rpm.value,
            size : e.target.size.value,
            website : e.target.website.value,
            description : e.target.description.value
        };

        Meteor.call("addCooling", Cooling, user);
        FlowRouter.go("/cooling");
    }
});