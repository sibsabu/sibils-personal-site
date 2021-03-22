function openEmailClient(){
    window.open('mailto:sibsabu@gmail.com')
}

function toggleMode() {
    let mode = getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-color');
    console.log(mode);
    if(mode === 'whitesmoke') {
        document.documentElement.style.setProperty('--bg-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'white');
    } else {
        document.documentElement.style.setProperty('--bg-color', 'whitesmoke');
        document.documentElement.style.setProperty('--text-color', 'black');
    }
}

window.onload=function(){
// listen for clicks on the navbar
    document.querySelector('.navbar').addEventListener('click', (e) => {

        // ignore it if the click isn't on an anchor element
        if (e.target.tagName.toLowerCase() === 'a') {

            // remove the 'active' class from all of the nav anchors
            document.querySelectorAll('.navbar a')
                .forEach(e => e.classList.remove('active'));

            // add the 'active' class to the clicked element
            e.target.classList.add('active');
        }
    });}