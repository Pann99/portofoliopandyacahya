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
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    delay: 100,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    reset: false,
});

/* Home */
sr.reveal('.home__data',        { origin: 'left',  distance: '60px' });
sr.reveal('.home__img',         { origin: 'right', distance: '60px', delay: 200 });
sr.reveal('.home__social-icon', { origin: 'left',  distance: '40px', interval: 100 });

/* About */
sr.reveal('.about__img',        { origin: 'left',  distance: '60px' });
sr.reveal('.about__subtitle',   { delay: 150 });
sr.reveal('.about__text',       { delay: 250 });

/* Skills */
sr.reveal('.skills__subtitle',  { delay: 100 });
sr.reveal('.skills__icon-item', { interval: 60, delay: 150 });
sr.reveal('.skills__img',       { origin: 'right', distance: '60px', delay: 200 });

/* Project */
sr.reveal('.work__item',        { interval: 150, delay: 100 });

/*===== CV MODAL =====*/
const cvBtn     = document.getElementById('cv-btn');
const cvModal   = document.getElementById('cv-modal');
const cvClose   = document.getElementById('cv-close');
const cvOverlay = document.getElementById('cv-overlay');

function openCVModal()  { cvModal.classList.add('is-open');    document.body.style.overflow = 'hidden'; }
function closeCVModal() { cvModal.classList.remove('is-open'); document.body.style.overflow = ''; }

if (cvBtn)     cvBtn.addEventListener('click', openCVModal);
if (cvClose)   cvClose.addEventListener('click', closeCVModal);
if (cvOverlay) cvOverlay.addEventListener('click', closeCVModal);

/*===== PORTOFOLIO MODAL =====*/
const portofolioBtn     = document.getElementById('portofolio-btn');
const portofolioModal   = document.getElementById('portofolio-modal');
const portofolioClose   = document.getElementById('portofolio-close');
const portofolioOverlay = document.getElementById('portofolio-overlay');

function openPortofolioModal()  { portofolioModal.classList.add('is-open');    document.body.style.overflow = 'hidden'; }
function closePortofolioModal() { portofolioModal.classList.remove('is-open'); document.body.style.overflow = ''; }

if (portofolioBtn)     portofolioBtn.addEventListener('click', openPortofolioModal);
if (portofolioClose)   portofolioClose.addEventListener('click', closePortofolioModal);
if (portofolioOverlay) portofolioOverlay.addEventListener('click', closePortofolioModal);

/*===== PROJECT MODALS =====*/
function setupProjectModal(btnId, modalId, closeId, overlayId) {
    const btn     = document.getElementById(btnId);
    const modal   = document.getElementById(modalId);
    const closeEl = document.getElementById(closeId);
    const overlay = document.getElementById(overlayId);

    function openModal() {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    if (btn)     btn.addEventListener('click', openModal);
    if (closeEl) closeEl.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
}

setupProjectModal('project2-btn', 'project2-modal', 'proj2-close', 'proj2-overlay');
setupProjectModal('project3-btn', 'project3-modal', 'proj3-close', 'proj3-overlay');
setupProjectModal('project4-btn', 'project4-modal', 'proj4-close', 'proj4-overlay');
setupProjectModal('project5-btn', 'project5-modal', 'proj5-close', 'proj5-overlay');

/*===== CLOSE MODALS ON ESCAPE =====*/
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCVModal();
        closePortofolioModal();
        document.querySelectorAll('.proj-modal.is-open').forEach(m => {
            m.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    }
});