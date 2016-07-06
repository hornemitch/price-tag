Template.AdminNav.helpers({
   userName: () =>{
       return (Meteor.user().profile.name.first + " " + Meteor.user().profile.name.last);
   }
});