Template.AdminNav.events({
   "click #log-out-button": ()=> {
        let confirm = window.confirm("Confirm log out");
       if(confirm) {
           Meteor.logout((err)=> {
               if (err) {
                   window.alert("An error occurred: " + err);
               }
               else {
                   FlowRouter.go("/login");
               }
           });
       }
   }
});