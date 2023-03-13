const modal = document.getElementById('Modal');
const modalInner = document.getElementById('ModalInner');
const projectContainer = document.getElementById('ProjectContainer');
const clickSvg = '<svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="layer1"><path d="M 3.4648438 0.46484375 C 1.5122218 2.4174653 1.5122217 5.5825347 3.4648438 7.5351562 L 4.171875 6.828125 C 2.609778 5.2660279 2.609778 2.7339722 4.171875 1.171875 L 3.4648438 0.46484375 z M 13.535156 0.46484375 L 12.828125 1.171875 C 14.390222 2.7339722 14.390222 5.2660279 12.828125 6.828125 L 13.535156 7.5351562 C 15.487778 5.5825347 15.487778 2.4174653 13.535156 0.46484375 z M 4.8789062 1.8789062 C 3.7073333 3.0504791 3.7073333 4.9495208 4.8789062 6.1210938 L 5.5859375 5.4140625 C 4.8048885 4.6330138 4.8048885 3.3669862 5.5859375 2.5859375 L 4.8789062 1.8789062 z M 12.121094 1.8789062 L 11.414062 2.5859375 C 12.195111 3.3669862 12.195111 4.6330138 11.414062 5.4140625 L 12.121094 6.1210938 C 13.292667 4.9495208 13.292667 3.0504791 12.121094 1.8789062 z M 7 2 L 7 10.292969 L 5.5 8.7929688 L 3.7382812 10.554688 L 3.8730469 11.066406 L 4.0390625 11.566406 L 4.234375 12.060547 L 4.4570312 12.537109 L 4.7070312 13.003906 L 4.984375 13.453125 L 5.2890625 13.886719 L 5.6171875 14.298828 L 5.9707031 14.693359 L 6.34375 15.066406 L 6.7402344 15.416016 L 6.9902344 15.646484 L 7.21875 15.900391 L 7.4199219 16.173828 L 7.59375 16.466797 L 7.7382812 16.777344 L 7.8515625 17.097656 L 7.9335938 17.427734 L 7.9824219 17.765625 L 8 18.105469 L 8 20 L 15 20 L 15 16.445312 L 15.013672 16.121094 L 15.060547 15.798828 L 15.134766 15.484375 L 15.238281 15.175781 L 15.369141 14.878906 L 15.523438 14.568359 L 15.667969 14.251953 L 15.787109 13.923828 L 15.878906 13.589844 L 15.945312 13.248047 L 15.986328 12.904297 L 16 12.556641 L 16 9.1386719 L 10 7.140625 L 10 2 L 7 2 z M 8 3 L 9 3 L 9 7.8613281 L 15 9.8613281 L 15 12.556641 L 14.984375 12.880859 L 14.939453 13.201172 L 14.865234 13.517578 L 14.761719 13.826172 L 14.628906 14.121094 L 14.474609 14.431641 L 14.332031 14.748047 L 14.212891 15.076172 L 14.121094 15.410156 L 14.052734 15.751953 L 14.011719 16.097656 L 13.998047 16.445312 L 13.998047 19.001953 L 9 19.001953 L 9 18.105469 L 8.984375 17.710938 L 8.9316406 17.320312 L 8.8457031 16.935547 L 8.7265625 16.560547 L 8.5742188 16.197266 L 8.3925781 15.845703 L 8.1796875 15.515625 L 7.9394531 15.203125 L 7.671875 14.914062 L 7.3789062 14.648438 L 6.9960938 14.306641 L 6.6347656 13.941406 L 6.2988281 13.552734 L 5.9882812 13.146484 L 5.703125 12.716797 L 5.4453125 12.273438 L 5.21875 11.8125 L 5.0214844 11.337891 L 4.8535156 10.853516 L 5.5 10.207031 L 8 12.707031 L 8 3 z " style="fill:#222222; fill-opacity:1; stroke:none; stroke-width:0px;"/></g></svg>';

const projectData = [
  {
    id: 'ProjectOne',
    h2: 'Project One: Accessible Form',
    description: 'The accessible form project was the first step in combining major unit concepts together. This project specifically combines mobile first responsive design with semantic html functionality inherent to the form element.',
    imgSrc: 'assets/accessible_form.png',
    link: 'https://beboothy.github.io/unit-3_accessible_form_project_submission/'
  },
  {
    id: 'ProjectTwo',
    h2: 'Project Two: Photo Gallery',
    description: 'This photo gallery was an opportunity to practice and explore CSS grid, external JavaScript frameworks, and making my own search filter. This was a solid learning experience to prepare for more in depth projects where data can eventually be fed into ojects while working with external frameworks.',
    imgSrc: 'assets/photo_gallery.png',
    link: 'https://beboothy.github.io/unit-5_photo_gallery/'
  },
  {
    id: 'ProjectThree',
    h2: 'Project Three: Wheel of Success',
    description: 'Using JavaScript filter functions, this game can provide a random phrase for the user to guess using the provided buttons. It could be upgraded in the future to pull phrases from an external source. This was also a good project for practicing CSS transitions and animations.',
    imgSrc: 'assets/wheel.png',
    link: 'https://beboothy.github.io/unit-6_game_show_app/'
  },
  {
    id: 'ProjectFour',
    h2: 'Project Four: Employee Directory',
    description: 'Finally! A chance to use asynchronous JavaScript (FetchAPI) to generate a directory of employees from an external API. Clicking each employee will lead to a modal containing more information about them!',
    imgSrc: 'assets/directory.png',
    link: 'https://beboothy.github.io/unit-8_employee_directory/'
  },
  {
    id: 'ProjectFive',
    h2: 'Project Five: Portfolio Template',
    description: 'This was the first project that I did in this Treehouse TechDegree! Using a template, I was able to add some simple HTML and CSS to make it POP. This gives a good chance to see a bit of my growth since starting the tech degree since it has almost no functionality other than some basic links.',
    imgSrc: 'assets/original_portfolio.png',
    link: 'https://beboothy.github.io/portfolio_update-official/'
  }
]

function createProjectTemplates(data) {
  console.log('creating projects');

  for (i = 0; i < data.length; i++) {
    let section, div, h2, p, flexTrap, imgAnchor, img, a, openModal;
    section = document.createElement('section');
    section.id = data[i].id;

    div = document.createElement('div');
    div.className = 'project_info_container';

    h2 = document.createElement('h2');
    h2.innerText = data[i].h2;

    p = document.createElement('p');
    p.className = 'project_bio';
    p.innerText = data[i].description;

    imgAnchor = document.createElement('a');
    imgAnchor.setAttribute('href', data[i].link);
    imgAnchor.setAttribute('target', '_blank');

    img = document.createElement('img');
    img.alt = `Thumbnail for ${data[i].h2}`;
    img.src = data[i].imgSrc;

    a = document.createElement('a');
    a.innerText = 'Check this page out!'
    a.setAttribute('href', data[i].link);
    a.setAttribute('target', '_blank');
    a.className = 'github_pages_link';

    flexTrap = document.createElement('div');
    flexTrap.className = 'flex_trap';

    openModal = document.createElement('button');
    openModal.className = 'btn';
    openModal.setAttribute('data-button', `${data[i].id}`)
    openModal.innerText = data[i].h2;

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(flexTrap);
    flexTrap.appendChild(a);
    imgAnchor.appendChild(img);
    flexTrap.appendChild(imgAnchor);

    div.appendChild(openModal);
    openModal.insertAdjacentHTML("afterbegin", clickSvg);

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

      let div, h2, p, flexTrap, imgAnchor, img, a, closeBtn;
  
      div = document.createElement('div');
      div.className = 'project_info_container';
  
      h2 = document.createElement('h2');
      h2.innerText = projectData[i].h2;
  
      p = document.createElement('p');
      p.className = 'project_bio';
      p.innerText = projectData[i].description;

      imgAnchor = document.createElement('a');
      imgAnchor.setAttribute('href', projectData[i].link);
      imgAnchor.setAttribute('target', '_blank');

      img = document.createElement('img');
      img.alt = `Thumbnail for ${projectData[i].h2}`;
      img.src = projectData[i].imgSrc;

      flexTrap = document.createElement('div');
      flexTrap.className = 'flex_trap';
  
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
      div.appendChild(flexTrap);
      flexTrap.appendChild(a);
      imgAnchor.appendChild(img);
      flexTrap.appendChild(imgAnchor);
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

// Help setting up observer from https://codepen.io/heatherthedev/pen/ajYQWK
// Callback Observer for Nav
const navupdate = (entries, observer) => {
	entries.forEach((entry) => {
		// verify the element is intersecting
		if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			// remove old active class
			document.querySelector('.active').classList.remove('active');
			// get id of the intersecting section
			var id = entry.target.getAttribute('id');
			// find matching link & add appropriate class
			var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
		}
	});
}

// observer start
const options = {
	threshold: 0.55
}
const observer = new IntersectionObserver(navupdate, options);

// create sections array and call observer on each
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
	observer.observe(section);
});


// sticky header
window.onscroll = function() {
  setSticky();
};

nav = document.getElementById('nav');

var sticky = nav.offsetTop;

function setSticky() {
  if(window.pageYOffset >= sticky) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }
}