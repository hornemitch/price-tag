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
        {data: "caseType", title: "Case Size"},
        {data: "price",tmpl: Meteor.isClient && Template.price, title: "Price"},
        {data: "stock", title: "Stock Availability", class:"col-md-2"},
        {class: "centered", tmpl: Meteor.isClient && Template.icons, title: "Actions"}
    ]
});