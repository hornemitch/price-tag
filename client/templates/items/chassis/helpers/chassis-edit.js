import { chassis } from "../../../../../imports/collections/collections";

Template.ChassisEdit.onRendered(function(){
    const self = this;
    const id = FlowRouter._current.params.id;
    let object ="";
    self.subscribe("chassis", ()=>{
        object =  chassis.findOne(id);

        const caseType = document.getElementsByName("caseType")[0];
        const manufacturer = document.getElementsByName("manufacturer")[0];
        const psuMountPos = document.getElementsByName("psuMountPos")[0];
        const stock = document.getElementsByName("stock")[0];

        caseType.value = object.caseType;
        manufacturer.value = object.manufacturer;
        psuMountPos.value = object.psuMountPos;
        stock.value = object.stock;
    });


});

Template.ChassisEdit.helpers({
    "chassis": ()=> {
        const id = FlowRouter._current.params.id;
        return chassis.findOne(id);
    }
});

