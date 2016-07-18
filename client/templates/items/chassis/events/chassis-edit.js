Template.ChassisEdit.events({
    "click #backButton"(){
        FlowRouter.go("/chassis");
    },
    "submit #edit-form" (e){
        e.preventDefault();

        const user = Meteor.user();

        let Object = {
            caseType : e.target.caseType.value,
            fanNumber : e.target.fanNumber.value,
            manufacturer : e.target.manufacturer.value,
            model : e.target.model.value,
            name : e.target.name.value,
            opticBayNumber : e.target.opticBayNumber.value,
            pciSlotNumber : e.target.pciSlotNumber.value,
            psuMountPos : e.target.psuMountPos.value,
            sizeHeight : e.target.sizeHeight.value,
            sizeLength : e.target.sizeLength.value,
            sizeWidth : e.target.sizeWidth.value,
            price : e.target.price.value,
            stock : e.target.stock.value,
            website : e.target.website.value
        };

        Meteor.call("editChassis", FlowRouter._current.params.id, Object, user);
        FlowRouter.go("/chassis");
    }
});