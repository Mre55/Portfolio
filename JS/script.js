const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-btn');
const showMobileMenu = document.querySelector('.mobile-menu');

const seeProjectDetail = document.querySelectorAll('.see-project-btn');
const projectDetail = document.querySelector('.project-detail');

const projects = [
  {
    id: '1',
    name: 'Portfolio',
    description: "This project is about one of the most powerful tools in your software developer toolbox; it’s the easiest way of showing what I truly capable of as a developer, and is a quick and simple way for recruiters and hiring managers to get an idea of what I can bring to their teams.",
    featured_image: '../Images/work-img-one.png',
    link_to_live: ['See live', './Images/detailProjectLive.png'],
    link_to_source: ['See source', './Images/detailProjectGit.png'],
    technologies: ['html', 'css', 'javaScript'],
    name_detail: ['Mihreteab M.', 'Front-End Dev', '2021'],
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    featured_image: './Images/work-two-img.jpg',
    link_to_live: ['See live', './Images/detailProjectLive.png'],
    link_to_source: ['See source', './Images/detailProjectGit.png'],
    technologies: ['html', 'css', 'javaScript'],
    name_detail: ['CANOPY', 'Back End Dev', '2015'],
  },
  {
    id: '3',
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    featured_image: './Images/work-three-img.jpg',
    link_to_live: ['See live', './Images/detailProjectLive.png'],
    link_to_source: ['See source', './Images/detailProjectGit.png'],
    technologies: ['html', 'css', 'javaScript'],
    name_detail: ['CANOPY', 'Back End Dev', '2015'],
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    featured_image: './Images/work-four-img.jpg',
    link_to_live: ['See live', './Images/detailProjectLive.png'],
    link_to_source: ['See source', './Images/detailProjectGit.png'],
    technologies: ['html', 'css', 'javaScript'],
    name_detail: ['CANOPY', 'Back End Dev', '2015'],
  },
];

function openMenu(mobileMenu, mainTag, humburgerButton) {
  mobileMenu.classList.add('active');
  mainTag.classList.add('fixed_postion');
  humburgerButton.classList.add('hide');
}

function closeMenu(mobileMenu) {
  mainTag.classList.remove('fixed_postion');
  mobileMenu.classList.remove('active');
  humburgerButton.classList.remove('hide');
  projectDetail.classList.remove('active');
}

openMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = document.querySelector(button.dataset.mobileMenuTarget);
    openMenu(mobileMenu, mainTag, humburgerButton);
  });
});

closeMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = button.closest('.mobile-menu');
    closeMenu(mobileMenu);
  });
});

menuContainer.addEventListener('click', () => {
  mainTag.classList.remove('fixed_postion');
  showMobileMenu.classList.remove('active');
  humburgerButton.classList.remove('hide');
});

seeProjectDetail.forEach((button) => {
  button.addEventListener('click', (e) => {
    const selectedProject = projects.filter((project) => project.id === e.target.id)[0];
    projectDetail.classList.add('active');
    projectDetail.innerHTML = `
        <article class="work-container flex project-detail-article project-flex">
            <div class="project-detail-header">
              <h3>${selectedProject.name}</h3>
              <button data-close-button class="close-button-project">&times;</button>
           </div>
           <div class="client-des">
              <ul class="client-name">
                <li>${selectedProject.name_detail[0]}</li>
              </ul>
              <ul>
                <li>${selectedProject.name_detail[1]}</li>
              </ul>
              <ul>
                <li>${selectedProject.name_detail[2]}</li>
              </ul>
            </div>
          <div class="work-img img-one"></div>
          <div class="work-description-project project-detail-work-description">
            <p>
              ${selectedProject.description}
            </p>
            <div class="project-detail-tech-btns">
            <ul class="buttons project-detail-buttons">
              <li><button type="button">${selectedProject.technologies[0]}</button></li>
              <li><button type="button">${selectedProject.technologies[1]}</button></li>
              <li><button type="button">${selectedProject.technologies[2]}</button></li>
            </ul>
            <div class="project-detail-buttons">
                <a href="https://mre55.github.io/Portfolio/"><button class="see-project-btn see-source">${selectedProject.link_to_live[0]}
                  <img class="see-source-img" src=${selectedProject.link_to_live[1]} alt="" /></button>
                </a>
                <a href="https://github.com/Mre55/Portfolio"><button class="see-project-btn see-source">${selectedProject.link_to_source[0]}
                  <img class="see-source-img" src=${selectedProject.link_to_source[1]} alt="" /></button>
                </a>
            </div>
            </div>
          </div>
        </article>
        `;
        // <div class="project-detail-background"></div>
        const projectDetailClose = document.querySelector('.close-button-project');
    projectDetailClose.addEventListener('click', () => {
      mainTag.classList.remove('fixed_postion');
      projectDetail.classList.remove('active');
    });
  });
});

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, invalidMsg) {
  if (!hasValue(input, invalidMsg)) {
    return false;
  }
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#myForm');
const EMAIL_INVALID = 'Please enter a correct email address format. Uppercase not allowed in this field!!';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});

const fullNameForm = document.getElementById('fullName');
const emailForm = document.getElementById('email');
const commentForm = document.getElementById('comment');

function handleChange() {
  const formData = {
    fullName: fullNameForm.value,
    email: emailForm.value,
    comment: commentForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    fullNameForm.value = formObject.fullName;
    emailForm.value = formObject.email;
    commentForm.value = formObject.comment;
  }
});

fullNameForm.onchange = handleChange;
emailForm.onchange = handleChange;
commentForm.onchange = handleChange;