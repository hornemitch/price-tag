function checkUser(){
    let user = Meteor.user();
    if(user){
        if(user.roles[0] == "admin"){
            return {nav: "AdminNav", home: "HomeAdmin"};
        }
        else {
            return {nav: "LoggedInNav", home: "Home"};
        }
    }
    else{
        return {nav: "LoggedOutNav", home: "Home"};
    }
}

//  *   *   *   *   Main Routes *   *   *   *

FlowRouter.route('/', {
   action: function(){
       let object = checkUser();
       BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: object.home})
   }
});
FlowRouter.route('/login', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "Login"})
    }
});
FlowRouter.route('/register', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "Register"})
    }
});

//  *   *   *   *   Chassis Routes *   *   *   *

FlowRouter.route('/chassis', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "ChassisMain"})
    }
});
FlowRouter.route('/chassis/add', {
    action: ()=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "ChassisAdd"})
    }
});
FlowRouter.route('/chassis/edit/:id', {
    action:(data)=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "ChassisEdit"});
    }
});

//  *   *   *   *   Cooling Routes *   *   *   *

FlowRouter.route('/cooling', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "CoolingMain"})
    }
});
FlowRouter.route('/cooling/add', {
    action: ()=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "CoolingAdd"})
    }
});
FlowRouter.route('/cooling/edit/:id', {
    action:(data)=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "CoolingEdit"});
    }
});

//  *   *   *   *   CPU Routes *   *   *   *

FlowRouter.route('/cpu', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "CpuMain"})
    }
});
FlowRouter.route('/cpu/add', {
    action: ()=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "CpuAdd"})
    }
});
FlowRouter.route('/cpu/edit/:id', {
   action:(data)=>{
       let object = checkUser();
       BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "CpuEdit"});
   }
});

