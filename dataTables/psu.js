import { psu } from "../imports/collections/collections";
import { Tabular } from "meteor/aldeed:tabular";

TabularTables = {};

TabularTables.PSU = new Tabular.Table({
    name: "PSU",
    collection: psu,
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
        {data: "watt", title: "Output"},
        {data: "price", title: "Price"},
        {data: "website", title: "Website"},
        {data: "stock", title: "Available"},
        {class: "centered", tmpl: Meteor.isClient && Template.icons, title: "Actions"}
    ]
});