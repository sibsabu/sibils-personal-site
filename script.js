function openEmailClient() {
    window.open('mailto:sibsabu@gmail.com');
}

function removeArrowNav() {
  console.log("pagedetected");
  document.getElementById('arrow-finder').style.display = "none"; 
}

function addArrowNav() {
  console.log("pagedetected");
  document.getElementById('arrow-finder').style.display = "block"; 
}



let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.onload=function() {
    document.querySelector('#toggle-night-mode').addEventListener("click", function () {
        let mode = getComputedStyle(document.documentElement)
            .getPropertyValue('--bg-colour');
        console.log(mode);

        if (mode !== 'black') {
            document.documentElement.style.setProperty('--bg-colour', 'black');
            document.documentElement.style.setProperty('--text-colour', 'white');
            document.documentElement.style.setProperty('--offset-black', 'rgb(24,24,24)');
            document.documentElement.style.setProperty('--side-by-side-colour', 'rgb(24,24,24)');
            document.getElementById("spotify").src = "static/spotify-dark-mode.png";         
        } else {
            document.documentElement.style.setProperty('--bg-colour', 'whitesmoke');
            document.documentElement.style.setProperty('--text-colour', 'black');
            document.documentElement.style.setProperty('--offset-black', 'white');
            document.documentElement.style.setProperty('--side-by-side-colour', '#f2f8f9')
            document.getElementById("spotify").src = "static/spotify-logo.jpg";           
        }
    });

    // document.querySelector('#boeing').addEventListener("mouseover", function () {
    //     let boeingPic = document.getElementById("boeing-image");
    //     boeingPic.style.display = "block";
    // })

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    document.querySelector('#arrow-finder').addEventListener("click", function () {
        document.getElementById('arrow-finder').style.display = "none"
    });

    const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  activeDelay = .76,
  interval = 5000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },
  nextSlide: () => { // Increment current slide and add active class
    slider.reset();
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: (e) => { // Add active class to clicked control and corresponding slide
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => { 
      if (index === dataIndex) { // Add active class to corresponding slide
        item.classList.add('active');
      }
    })
    current = dataIndex; // Update current slide
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
  },
  reset: () => { // Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
    let seconds;
    
    items.forEach(item => {
      const children = item.childNodes; // .vertical-part(s)
      let count = 1,
        delay;
      
      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      children.forEach(child => { // iterate through .vertical-part(s) and style b element
        if (child.classList) {
          item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
          count++;
        }
      })
    })
  },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();
}


