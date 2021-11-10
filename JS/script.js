const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-btn');
const mobile_menu = document.querySelector('.mobile-menu');

const projectDetails = document.querySelectorAll('.see-project-btn')
const projectDetail = document.querySelector('.project-detail');
const projectDetailClose = document.querySelector('.close-button-project');


const projects = [
    {
        id: 1,
        name:  "Tonic",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image: "./Images/work-one-img.jpg",
        link_to_live: ["See live", "./Images/detailProjectLive.png"],
        link_to_source: ["See source", "./Images/detailProjectGit.png"],
        technologies: ["html", "css", "javaScript"],
        name_detail: ["CANOPY", "Back End Dev", "2015"]
    },
    {
        id: 2,
        name:  "Multi-Post Stories",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image: "./Images/work-two-img.jpg",
        link_to_live: ["See live", "./Images/detailProjectLive.png"],
        link_to_source: ["See source", "./Images/detailProjectGit.png"],
        technologies: ["html", "css", "javaScript"],
        name_detail: ["CANOPY", "Back End Dev", "2015"]
    },
    {
        id: 3,
        name:  "Tonic",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image: "./Images/work-three-img.jpg",
        link_to_live: ["See live", "./Images/detailProjectLive.png"],
        link_to_source: ["See source", "./Images/detailProjectGit.png"],
        technologies: ["html", "css", "javaScript"],
        name_detail: ["CANOPY", "Back End Dev", "2015"]
    },
    {
        id: 4,
        name:  "Multi-Post Stories",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image: "./Images/work-four-img.jpg",
        link_to_live: ["See live", "./Images/detailProjectLive.png"],
        link_to_source: ["See source", "./Images/detailProjectGit.png"],
        technologies: ["html", "css", "javaScript"],
        name_detail: ["CANOPY", "Back End Dev", "2015"]
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
            <div class="project-detail-header">
              <h3>${selected_project.name}</h3>
              <button data-close-button class="close-button-project">&times;</button>
           </div>
           <div class="client-des">
              <ul class="client-name">
                <li>${selected_project.name_detail[0]}</li>
              </ul>
              <ul>
                <li>${selected_project.name_detail[1]}</li>
              </ul>
              <ul>
                <li>${selected_project.name_detail[2]}</li>
              </ul>
            </div>
          <div class="work-img">
            <img src=${selected_project.featured_image} alt="Picture for the project Tonic, showing a laptop and a widescreen." />
          </div>
          <div class="work-description-project">
            <p>
              ${selected_project.description}
            </p>
            <ul class="buttons">
              <li><button type="button">${selected_project.technologies[0]}</button></li>
              <li><button type="button">${selected_project.technologies[1]}</button></li>
              <li><button type="button">${selected_project.technologies[2]}</button></li>
            </ul>
            <div class="project-detail-buttons">
                <a href="https://mre55.github.io/Portfolio/"><button class="see-project-btn see-source">${selected_project.link_to_live[0]}
                  <img class="see-source-img" src=${selected_project.link_to_live[1]} alt="" /></button>
                </a>
                <a href="https://github.com/Mre55/Portfolio"><button class="see-project-btn see-source">${selected_project.link_to_source[0]}
                  <img class="see-source-img" src=${selected_project.link_to_source[1]} alt="" /></button>
                </a>
            </div>
          </div>
        </article>`;
    })
})
