const modal = document.getElementById('Modal');
const modalInner = document.getElementById('ModalInner');
const projectContainer = document.getElementById('ProjectContainer');

const projectData = [
  {
    id: 'ProjectOne',
    h2: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'https://beboothy.github.io/unit-5_photo_gallery/'
  },
  {
    id: 'ProjectTwo',
    h2: 'Project Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'https://beboothy.github.io/unit-5_photo_gallery/'
  },
  {
    id: 'ProjectThree',
    h2: 'Project Three',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'https://beboothy.github.io/unit-5_photo_gallery/'
  },
  {
    id: 'ProjectFour',
    h2: 'Project Four',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'https://beboothy.github.io/unit-5_photo_gallery/'
  }
]

function createProjectTemplates(data) {
  console.log('creating projects');

  for (i = 0; i < data.length; i++) {
    let section, div, h2, p, a, openModal;
    section = document.createElement('section');
    section.id = data[i].id;

    div = document.createElement('div');
    div.className = 'project_info_container';

    h2 = document.createElement('h2');
    h2.innerText = data[i].h2;

    p = document.createElement('p');
    p.className = 'project_bio';
    p.innerText = data[i].description;

    a = document.createElement('a');
    a.innerText = 'Check this page out!'
    a.setAttribute('href', data[i].link);
    a.setAttribute('target', '_blank');
    a.className = 'github_pages_link';

    openModal = document.createElement('button');
    openModal.className = 'btn';
    openModal.setAttribute('data-button', `${data[i].id}`)
    openModal.innerText = data[i].h2;

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(a);
    div.appendChild(openModal);

    section.appendChild(div);

    projectContainer.appendChild(section);
  }
}

createProjectTemplates(projectData);

document.addEventListener('click', (e) => {
  for (i = 0; i < projectData.length; i++) {
    if (e.target.dataset.button === projectData[i].id) {
      openProjectModal(projectData[i].id);
    }
  }
});

function openProjectModal(id) {
  console.log(id);

  for (i = 0; i < projectData.length; i++) {
    if (id === projectData[i].id) {

      let div, h2, p, a, closeBtn;
  
      div = document.createElement('div');
      div.className = 'project_info_container';
  
      h2 = document.createElement('h2');
      h2.innerText = projectData[i].h2;
  
      p = document.createElement('p');
      p.className = 'project_bio';
      p.innerText = projectData[i].description;
  
      a = document.createElement('a');
      a.innerText = 'Check this page out!'
      a.setAttribute('href', projectData[i].link);
      a.setAttribute('target', '_blank');
      a.className = 'github_pages_link';
  
      closeBtn = document.createElement('button');
      closeBtn.className = 'closeBtn';
      closeBtn.setAttribute('onclick', 'closeModal()');
      // for IE support
      closeBtn.onclick = function() {closeModal()};
      closeBtn.innerText = 'Close';
  
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(a);
      div.appendChild(closeBtn);
  
      modalInner.appendChild(div);
    }

  }
  modal.showModal();
};

function closeModal() {
  modalInner.innerHTML = '';
  modal.close();
}


