import { chassis } from "../imports/collections/collections";
import { Tabular } from "meteor/aldeed:tabular";

TabularTables = {};

TabularTables.Chassis = new Tabular.Table({
    name: "Chassis",
    collection: chassis,
    order: [[0 , 'asc']],
    scrollCollapse:true,
    scrollX:true,
    scrollY: '60vh',
    lengthMenu:[5,10,15,20,25,50],
    pageLength: 5,
    columns: [
        {data: "name", title: "Name"},
        {data: "manufacturer", title: "Manufacturer"},
        {data: "model", title: "Model"},
        {data: "type", title: "Size Type"},
        {data: "price", title: "Price"},
        {data: "psuMount", title: "PSU Mounting"},
        {data: "website", title: "Website"},
        {data: "stock", title: "Available"},
        {class: "centered", tmpl: Meteor.isClient && Template.icons, title: "Actions"}
    ]
});