import {Mongo} from 'meteor/mongo';

export const cpu          = new Mongo.Collection("cpu");
export const memory       = new Mongo.Collection("memory");
export const gpu          = new Mongo.Collection("gpu");
export const storage      = new Mongo.Collection("storage");
export const psu          = new Mongo.Collection("psu");
export const motherboard  = new Mongo.Collection("motherboard");
export const cooling      = new Mongo.Collection("cooling");
export const soundCard    = new Mongo.Collection("soundCard");
export const chassis      = new Mongo.Collection("chassis");
export const diskDrive    = new Mongo.Collection("diskDrive");
export const Flash        = new Mongo.Collection("Flash");
export const sdCardReader = new Mongo.Collection("sdCardReader");
export const Peripheral   = new Mongo.Collection("Peripheral");
export const raid         = new Mongo.Collection("raid");
export const cabinet      = new Mongo.Collection("cabinet");