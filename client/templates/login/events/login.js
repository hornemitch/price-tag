import { Bert } from "meteor/themeteorchef:bert";

Template.Login.events({
   "submit #sign-in-form" (e){
        e.preventDefault();

        let user = e.target.userName.value;
        let pass = e.target.password.value;

        e.target.userName.value = "";
        e.target.password.value = "";

        Meteor.loginWithPassword(user, pass, (err) =>{
           if(err){
               Bert.alert( 'Incorrect login information', 'danger', 'growl-top-right' );
           }
           else{
               Bert.alert( 'Login successful', 'success', 'growl-top-right' );
               FlowRouter.go("/")
           }
        });
    }
});