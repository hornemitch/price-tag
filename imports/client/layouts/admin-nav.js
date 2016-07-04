import  React  from "react";

export const AdminNav = React.createClass({
   render(){
       return <nav className="navbar navbar-default">
           <div className="container-fluid">
               <div className="navbar-header">
                   <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                       <span className="sr-only">Toggle navigation</span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                   </button>
                   <a className="navbar-brand" href="/">Price Tag</a>
               </div>

               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                   <ul className="nav navbar-nav">
                       <li className="dropdown">
                           <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products <span className="caret"></span></a>
                           <ul className="dropdown-menu">
                               <li><a href="#">Chassis</a></li>
                               <li><a href="#">Console Gaming</a></li>
                               <li><a href="#">Cooling</a></li>
                               <li><a href="#">CPU's</a></li>
                               <li><a href="#">Disk Drives</a></li>
                               <li><a href="#">Flash Memory</a></li>
                               <li><a href="#">GPU's</a></li>
                               <li><a href="#">Memory</a></li>
                               <li><a href="#">Motherboards</a></li>
                               <li><a href="#">PC Gaming</a></li>
                               <li><a href="#">Peripherals</a></li>
                               <li><a href="#">Power Supplies</a></li>
                               <li><a href="#">RAID Controllers</a></li>
                               <li><a href="#">SD Card Readers</a></li>
                               <li><a href="#">Server Racks</a></li>
                               <li><a href="#">Sound Cards</a></li>
                               <li><a href="#">Storage</a></li>
                           </ul>
                       </li>
                   </ul>
                   <ul className="nav navbar-nav navbar-right">
                       <li><a href="#">Link</a></li>
                       <li className="dropdown">
                           <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                           <ul className="dropdown-menu">
                               <li><a href="#">Action</a></li>
                               <li><a href="#">Another action</a></li>
                               <li><a href="#">Something else here</a></li>
                               <li role="separator" className="divider"></li>
                               <li><a href="#">Separated link</a></li>
                           </ul>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>;
   }
});