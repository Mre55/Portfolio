const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-btn');
const mobile_menu = document.querySelector('.mobile-menu');

const projectDetails = document.querySelectorAll('.see-project-btn')
const projectDetail = document.querySelector('.project-detail');


const projects = [
    {
        id: 1,
        name:  "Tonic",
        descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        image: "./Images/work-one-img.jpg",
        imageGit: "./Images/detailProjectGit.png",
        imageLive: "./Images/detailProjectLive.png"

    }
]

openMobileMenu.forEach(button => {
    button.addEventListener('click', () => {
        const mobileMenu = document.querySelector(button.dataset.mobileMenuTarget);
        openMenu(mobileMenu, mainTag, humburgerButton);
    })
})

closeMobileMenu.forEach(button => {
    button.addEventListener('click', () => {
        const mobileMenu = button.closest('.mobile-menu')
        closeMenu(mobileMenu);
    })
})

function openMenu(mobileMenu, mainTag, humburgerButton) {
    if(mobileMenu == null){
        return
    } else {

        mobileMenu.classList.add('active');
        mainTag.classList.add('fixed_postion');
        humburgerButton.classList.add('hide');
    }
}
 
function closeMenu(mobileMenu) {
    if(mobileMenu == null) {
        return
    }else{
        mainTag.classList.remove('fixed_postion')
        mobileMenu.classList.remove('active');
        humburgerButton.classList.remove('hide');
        projectDetail.classList.remove('active');
    }
}

menuContainer.addEventListener('click', ()=> {
    mainTag.classList.remove('fixed_postion');
    mobile_menu.classList.remove('active');
    humburgerButton.classList.remove('hide');
})

projectDetails.forEach((button)=>{
    button.addEventListener('click', (e) => {
        const selected_project = projects.filter((project)=> project.id == e.target.id)[0]
        mainTag.classList.add('fixed_postion');
        projectDetail.classList.add('active');
        projectDetail.innerHTML = `
        <article class="work-container flex project-1">
            <div class="mobile-menu-header">
              <h3>${selected_project.name}</h3>
              <button data-close-button class="close-button-project">&times;</button>
           </div>
           <div class="client-des">
              <ul class="client-name">
                <li>CANOPY</li>
              </ul>
              <ul>
                <li>Back End Dev</li>
              </ul>
              <ul>
                <li>2015</li>
              </ul>
            </div>
          <div class="work-img">
            <img src=${selected_project.image} alt="Picture for the project Tonic, showing a laptop and a widescreen." />
          </div>
          <div class="work-description">
            <p>
              ${selected_project.descrition}
            </p>
            <ul class="buttons">
              <li><button type="button">html</button></li>
              <li><button type="button">css</button></li>
              <li><button type="button">javaScript</button></li>
            </ul>
            <div class="project-detail-buttons">
                <button class="see-project-btn see-source">See Project
                <img class="see-source-img" src=${selected_project.imageLive} alt="" />
                </button>
                <button class="see-project-btn see-source">See Project
                <img class="see-source-img" src=${selected_project.imageGit} alt="" />
                </button>
            </div>
          </div>
        </article>
        `;
    })
})
