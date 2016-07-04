import { Mongo } from 'meteor/mongo';

export const cpu          = new Mongo.Collection('cpu');
export const gpu          = new Mongo.Collection('gpu');
export const memory       = new Mongo.Collection('memory');
export const motherBoard  = new Mongo.Collection('motherBoard');
export const psu          = new Mongo.Collection('psu');
export const storage      = new Mongo.Collection('storage');