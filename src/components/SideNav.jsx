import React from "react";
import '../App.css'
const sideNav = document.getElementById('side-nav');
const nav = document.getElementById('nav');
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

function toggleSideNav() {
    sideNav.classList.toggle('active');
    if(sideNav.classList.contains('active')) {
      nav.classList.remove('visible');
    }
      else {
        nav.classList.add('visible');
  }
  }
  navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(item => item.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
        item.classList.add('active');
        document.getElementById(item.getAttribute('accesskey')).classList.add('active');
    })
})




function SideNav(){
    return (
        <>

<div className="main-container col-12 col-md-6 d-flex"> 
     <div className="header-box px-2 pb-4 pt-3 d-flex justify-content-between">
    <h1 className="fs-4"><span className='bg-white text-dark rounded shadow px-2 me-2'><b>OM</b></span><span className="text-white"><b>Om restro</b></span></h1>
      <button className="btn d-md-none d-block close-btn text-white " onClick={toggleSideNav()}>
        <i className="fa-solid fa-times open-btn"></i>
    </button>
     </div>
     <ul className="list-unstyled px-2">
          
            <p  className='text-decoration-none px-3 py-2 d-block nav-item active'
              accesskey="home" 
            ><i className="fa-solid fa-house text-white"></i><span className="text-white" >Home</span> </p>
        
            <p  className='text-decoration-none px-3 py-2 d-block nav-item'access key="contact"
            ><i className="fa-solid fa-phone text-white"></i><span className="text-white" >contact</span> </p>
         
            <p  className='text-decoration-none px-3 py-2 d-block nav-item'
                accesskey="guide"
            ><i className="fa-solid fa-circle-question text-white"></i><span className="text-white" >Guide</span> </p>
          
            <p  className='text-decoration-none px-3 py-2 d-block nav-item'
                accesskey="information"
            ><i className="fa-solid fa-circle-info text-white"></i><span className="text-white" >Information</span> </p>
          
     </ul>
     <hr className="h-color mx-2 h"/>


 
    <ul className="list-unstyled px-2"> 
    
            <p  className='text-decoration-none px-3 py-2 d-block nav-item'
                accesskey="setting"
            ><i className="fa-solid fa-gear text-white"></i><span className="text-white" >Setting</span> </p>
          
            <p  className='text-decoration-none px-3 py-2 d-block nav-item'
                accesskey="notification"
            ><i className="fa-solid fa-circle-info text-white"></i><span className="text-white" >notification</span> </p>
        
    </ul>
   </div>
        </>
    );
}

export default SideNav;