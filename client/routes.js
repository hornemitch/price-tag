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
    action:()=>{
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

//  *   *   *   *   GPU Routes *   *   *   *

FlowRouter.route('/gpu', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "GpuMain"})
    }
});
FlowRouter.route('/gpu/add', {
    action: ()=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "GpuAdd"})
    }
});
FlowRouter.route('/gpu/edit/:id', {
    action:(data)=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "GpuEdit"});
    }
});

//  *   *   *   *   Memory Routes *   *   *   *

FlowRouter.route('/memory', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "MemoryMain"})
    }
});
FlowRouter.route('/memory/add', {
    action: ()=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "MemoryAdd"})
    }
});
FlowRouter.route('/memory/edit/:id', {
    action:(data)=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "MemoryEdit"});
    }
});

//  *   *   *   *   Motherboard Routes *   *   *   *

FlowRouter.route('/motherboard', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "MotherboardMain"})
    }
});
FlowRouter.route('/motherboard/add', {
    action: ()=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "MotherboardAdd"})
    }
});
FlowRouter.route('/motherboard/edit/:id', {
    action:(data)=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "MotherboardEdit"});
    }
});

//  *   *   *   *   Power Supply Routes *   *   *   *

FlowRouter.route('/psu', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "PsuMain"})
    }
});
FlowRouter.route('/psu/add', {
    action: ()=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "PsuAdd"})
    }
});
FlowRouter.route('/psu/edit/:id', {
    action:(data)=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "PsuEdit"});
    }
});

//  *   *   *   *   SoundCards Routes *   *   *   *

FlowRouter.route('/soundcard', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "SoundCardMain"})
    }
});
FlowRouter.route('/soundcard/add', {
    action: ()=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "SoundCardAdd"})
    }
});
FlowRouter.route('/soundcard/edit/:id', {
    action:(data)=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "SoundCardEdit"});
    }
});

//  *   *   *   *   Storage Routes *   *   *   *

FlowRouter.route('/storage', {
    action: function(){
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "StorageMain"})
    }
});
FlowRouter.route('/storage/add', {
    action: ()=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "StorageAdd"})
    }
});
FlowRouter.route('/storage/edit/:id', {
    action:(data)=>{
        let object = checkUser();
        BlazeLayout.render("MainLayout", {navbarRight: object.nav, main: "StorageEdit"});
    }
});