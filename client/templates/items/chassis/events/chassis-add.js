Template.ChassisAdd.events({
    "click #backButton"(){
        FlowRouter.go("/chassis");
    },
    "submit #add-form" (e){
        e.preventDefault();

        const user = Meteor.user();

        let Chassis = {
            name : e.target.name.value,
            manufacturer : e.target.manufacturer.value,
            model : e.target.model.value,
            type : e.target.type.value,
            price : e.target.price.value,
            psuMount : e.target.psuMount.value,
            description : e.target.description.value,
            website : e.target.website.value
        };

        Meteor.call("addChassis", Chassis, user);
        FlowRouter.go("/chassis");
    }
});