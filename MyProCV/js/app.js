
// Loading Front Page
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.backGround');

let load = 0;

let int = setInterval(blurring, 30);

function blurring () {
    load++

    if(load > 99){
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` 
}

//https://stackoverflow.com/questions/10756313/javascript
//-jquery-map-a-range-of-numbers-to-another-
//range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// function openNav() {
//     document.getElementsByClassName('education').style.width = "100%";
//  }
  
// function closeNav() {
//     document.getElementsById('btnEducation').style.width= "0%";
// }

let btnEdu = document.querySelector('#btnEducation');
let pageEducation = document.querySelector('.education');

let btnLang = document.querySelector('#btnLanguages');
let pageLanguages = document.querySelector('.languages');

let btnSkills = document.querySelector('#btnSkills');
let pageSkills = document.querySelector('.skills');

let btnWorkExp = document.querySelector('#btnWorkExp');
let pageWorkExperince = document.querySelector('.workExperince');

pageEducation.style.width = '0%';
pageLanguages.style.width = '0%';
pageSkills.style.width = '0%';
pageWorkExperince.style.width = '0%';



btnEdu.onclick = () => {
    if(pageEducation.style.width === '0%'){
        pageEducation.style.width = "100%";

        pageLanguages.style.width = '0%';
        pageSkills.style.width = '0%';
        pageWorkExperince.style.width = '0%';
    }else{
        pageEducation.style.width = '0%';
    }
};

btnLang.onclick = () => {
    if(pageLanguages.style.width === '0%'){
        pageLanguages.style.width = "100%";

        pageEducation.style.width = '0%';
        pageSkills.style.width = '0%';
        pageWorkExperince.style.width = '0%';
    }else{
        pageLanguages.style.width = '0%';
    }
};

btnSkills.onclick = () => {
    if(pageSkills.style.width === '0%'){
        pageSkills.style.width = "100%";

        pageEducation.style.width = '0%';
        pageLanguages.style.width = '0%';
        pageWorkExperince.style.width = '0%';
    }else{
        pageSkills.style.width = '0%';
    }
};

btnWorkExp.onclick = () => {
    if(pageWorkExperince.style.width === '0%'){
        pageWorkExperince.style.width = "100%";

        pageEducation.style.width = '0%';
        pageLanguages.style.width = '0%';
        pageSkills.style.width = '0%';
    }else{
        pageWorkExperince.style.width = '0%';
    }
};

// var btnEducation = document.getElementById('btnEducation'),
//     btnLanguages = document.getElementById('btnLanguages'),
//     btnSkills = document.getElementById('btnSkills'),
//     btnWorkExp = document.getElementById('btnWorkExp'),
//     pageEducation = document.getElementsByClassName('education'),
//     pageLanguages = document.getElementsByClassName('languages'),
//     pageSkills = document.getElementsByClassName('skills'),
//     pageWorkExp = document.getElementsByClassName('workExperince');

//     btnEducation.onclick = function() {
//         classie.toggle(this,'active');
//         classie.toggle(btnEducation, 'education');
//         disableOther('btnEducation');
//     };

//     function disableOther(button){
//         if(button !== 'btnEducation'){
//             classie.toggle(btnEducation, 'disabled');
//         }
//     };






// window.addEventListener('DOMContentLoaded', ev => {


//     function toggleMenu() {
  
  
//       var btns = document.querySelectorAll('[js-WorkExperience-btn]');
//       var menu = document.querySelector('[js-menu-WorkExperience]');
  
//       this.open = false;
  
//       btns.forEach(btn => {
//         btn.addEventListener('click', ev => {
//           this.open = !this.open;
  
//           if (this.open) {
//             btn.classList.add('open');
//             menu.classList.add('open')
//           } else {
//             btn.classList.remove('open');
//             menu.classList.remove('open')
//           }
//         });      
//       })
  
//     }
  
//     toggleMenu();
  
//   });