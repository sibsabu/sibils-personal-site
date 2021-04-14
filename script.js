function openEmailClient() {
    window.open('mailto:sibsabu@gmail.com');
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
            let containerCollection = document.getElementsByClassName("side-by-side");
            for(let i = 0 ; i < containerCollection.length ; i++) {
                containerCollection[i].style.background = "rgb(24,24,24)";
            }
            let textCollection = document.getElementsByClassName("text-item");
            for(let i = 0 ; i < textCollection.length ; i++) {
                textCollection[i].style.background = "rgb(24,24,24)";
            }
        } else {
            document.documentElement.style.setProperty('--bg-colour', 'whitesmoke');
            document.documentElement.style.setProperty('--text-colour', 'black');
            let containerCollection = document.getElementsByClassName("side-by-side");
            for(let i = 0 ; i < containerCollection.length ; i++) {
                containerCollection[i].style.background = "var(--bg-colour)";
            }
            let textCollection = document.getElementsByClassName("text-item");
            for(let i = 0 ; i < textCollection.length ; i++) {
                textCollection[i].style.background = "var(--bg-colour)";
            }
        }
    });

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    document.querySelector('#arrow-finder').addEventListener("click", function () {
        document.getElementById('arrow-finder').style.display = "none"
    });
}


