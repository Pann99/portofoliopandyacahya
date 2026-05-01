/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== CV MODAL =====*/
const cvBtn = document.getElementById('cv-btn');
const cvModal = document.getElementById('cv-modal');
const cvClose = document.getElementById('cv-close');
const cvOverlay = document.getElementById('cv-overlay');

function openCVModal() {
    cvModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeCVModal() {
    cvModal.classList.remove('is-open');
    document.body.style.overflow = '';
}

if (cvBtn) cvBtn.addEventListener('click', openCVModal);
if (cvClose) cvClose.addEventListener('click', closeCVModal);
if (cvOverlay) cvOverlay.addEventListener('click', closeCVModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCVModal();
});
/*===== PROJECT 2 MODAL =====*/
const proj2Btn     = document.getElementById('project2-btn');
const proj2Modal   = document.getElementById('project2-modal');
const proj2Close   = document.getElementById('proj2-close');
const proj2Overlay = document.getElementById('proj2-overlay');

function openProj2Modal() {
    proj2Modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeProj2Modal() {
    proj2Modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

if (proj2Btn)     proj2Btn.addEventListener('click', openProj2Modal);
if (proj2Close)   proj2Close.addEventListener('click', closeProj2Modal);
if (proj2Overlay) proj2Overlay.addEventListener('click', closeProj2Modal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProj2Modal();
});