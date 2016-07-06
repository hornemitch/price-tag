function checkNav(){
    let user = Meteor.user();

    if(user){
        if(user.roles[0] == "admin"){
            return "AdminNav";
        }
        else {
            return "LoggedInNav";
        }
    }
    else{
        return "LoggedOutNav";
    }
}

FlowRouter.route('/', {
   action: function(){
       let Nav = checkNav();
       BlazeLayout.render("MainLayout", {navbarRight: Nav, main: "Home"})
   }
});
FlowRouter.route('/login', {
    action: function(){
        let Nav = checkNav();
        BlazeLayout.render("MainLayout", {navbarRight: Nav, main: "Login"})
    }
});
FlowRouter.route('/register', {
    action: function(){
        let Nav = checkNav();
        BlazeLayout.render("MainLayout", {navbarRight: Nav, main: "Register"})
    }
});