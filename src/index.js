import {homePage} from "./home.js";
import {contactPage} from "./contact.js";
import {aboutPage} from "./about.js";
import './style.css'


const navBar=document.querySelectorAll('nav');
const content=document.querySelector('#content');
content.appendChild(homePage());
navBar.forEach(nav=>{
    nav.addEventListener('click',(e)=>{
    document.querySelectorAll('button.link').forEach(link=>{
        link.style.color='#999';
    })
    if (e.target.classList.contains('home-p')) {
      document.querySelectorAll('.home-p').forEach(link=>{
        link.style.color='#000';
      })
      content.innerHTML = "";
      content.appendChild(homePage());
    } 
    else if (e.target.classList.contains("contact-p")) {
       document.querySelectorAll(".contact-p").forEach((link) => {
         link.style.color = "#000";
       });
      content.innerHTML = "";
      content.appendChild(contactPage());
    }
     else if (e.target.classList.contains("about-p")) {
         document.querySelectorAll(".about-p").forEach((link) => {
           link.style.color = "#000";
         });
       content.innerHTML = "";
       content.appendChild(aboutPage());
     }
})
});
